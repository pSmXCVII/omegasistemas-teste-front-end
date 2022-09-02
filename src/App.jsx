import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Container from '@mui/material/Container';
import { GET_CASES_BY_STATE } from './api';
import style from './App.module.sass';
import Header from './components/Header/Header';
import AsideContainer from './components/Aside/AsideContainer';
import StatePage from './components/Pages/StatePage/StatePage';
import CountryPage from './components/Pages/CountryPage/CountryPage';


function App() {
  const [lastUpdate, setLastUpdate] = useState(null);
  const [casesByState, setCaseByState] = useState([]);

  useEffect(() => {
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
    fetchData();
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
      <Header lastUpdate={lastUpdate} />
      <Container sx={{display: 'flex'}} className={style.appContainer}>
        <Routes>
          <Route path='/' element={<CountryPage data={casesByState}/>} />
          <Route path='/:uf' element={<StatePage data={casesByState}/>} />
        </Routes>
        <AsideContainer data={casesByState}/>
      </Container>
    </>
  )
}

export default App
