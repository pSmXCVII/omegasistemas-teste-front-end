import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Container from '@mui/material/Container';
import { GET_CASES_BY_STATE } from './api';
import style from './App.module.sass';
import Header from './components/Header/Header';
import StatePage from './components/Pages/StatePage/StatePage';
import MainPage from './components/Pages/MainPage/MainPage';
import CountryPage from './components/Pages/CountryPage/CountryPage';
import { useSetRecoilState } from 'recoil';
import updateDataState from './atoms/updateDataState';
import isMobileState from './atoms/isMobileState';

function App() {
  const setLastUpdate = useSetRecoilState(updateDataState);
  const [casesByState, setCaseByState] = useState([]);
  const setIsMobile = useSetRecoilState(isMobileState);

  async function fetchData() {
    const {url, options} = GET_CASES_BY_STATE();
    try {
      const response = await fetch(url, options);
      if (response.ok) {
        const { data } = await response.json();
        setCaseByState(data);
      }
    } catch (error) {
      console.log(error)
    }
  }

  function handleResize() {
    isDeviceMobile();
  }

  function isDeviceMobile() {
    if (window.innerWidth < 768){
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  
  useEffect(() => {
    fetchData();
    isDeviceMobile();
    window.addEventListener('resize', isDeviceMobile);
  }, []);

  useEffect(() => {
    if (casesByState.length > 0) {
      setLastUpdate(casesByState[0].datetime);
    }
    return () => {
      setLastUpdate(null);
    }
  }, [casesByState])
  

  return (
    <>
      <Header/>
      <Container sx={{display: 'flex'}} className={style.appContainer}>
        <Routes>
          <Route path='/' element={<MainPage data={casesByState}/> } />
          <Route path='/brasil' element={<CountryPage data={casesByState} />} />
          <Route path='/estado/:uf' element={<StatePage data={casesByState} />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
