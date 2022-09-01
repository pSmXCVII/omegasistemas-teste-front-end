import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { GET_CASES_BY_STATE } from './api';
import './styles/app.sass';
import MainContent from './components/MainContent';
import AsideContainer from './components/AsideContainer';
import StatePage from './components/State/StatePage';

function App() {
  const [lastUpdate, setLastUpdate] = useState('data');
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


  return (
    <div className="app-container">
      <Routes>
        <Route path='/' element={<MainContent data={casesByState} />} />
        <Route path='/:uf' element={<StatePage data={casesByState}/>} />
      </Routes>
      <AsideContainer data={casesByState}/>
    </div>
  )
}

export default App
