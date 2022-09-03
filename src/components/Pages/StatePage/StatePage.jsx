import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './StatePage.module.sass';
import CustomBarChart from '../../Others/CustomBarChart/CustomBarChart';

const StatePage = ({ data }) => {
  const [especificStateStats, setEspecificStateStats] = useState({});
  const { uf } = useParams();

  const options = {
    title: `Estatística do COVID-19 por estado`,
    legend: 'none',
    chartArea: { width: "60%", height: "50%",},
    colors: ['#1976d2', '#D56552', '#b5a952'],
    background: 'transparent'
  };

  useEffect(() => {
    function filterEspecificState() {
      setEspecificStateStats(data?.filter((stats) => stats.uf === uf?.toUpperCase())[0]);
    };
    filterEspecificState();
  }, [uf, data]);
  useEffect(() => {
    
  }, []);
  return (
    <main className={styles.statePage}>
      <CustomBarChart data={especificStateStats} options={options} type="byState" />
    </main>  
  )
}

export default StatePage;