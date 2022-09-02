import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Container from '@mui/material/Container';
import { GET_CASES_BY_STATE } from './api';
import './styles/app.sass';
import Header from './components/Header'
import MainContent from './components/MainContent';
import AsideContainer from './components/AsideContainer';
import StatePage from './components/StatePage/StatePage';


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
      <Container sx={{display: 'flex'}} className="app-container">
        <Routes>
          <Route path='/' element={<MainContent data={casesByState} />} />
          <Route path='/:uf' element={<StatePage data={casesByState}/>} />
        </Routes>
        <AsideContainer data={casesByState}/>
      </Container>
    </>
  )
}

export default App
