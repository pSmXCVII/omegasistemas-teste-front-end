import { useEffect, useState } from 'react';
import styles from './CountryPage.module.sass';
import CustomBarChart from '../../Others/CustomBarChart/CustomBarChart';
import CustomSelectSmall from '../../Others/CustomSelectSmall/CustomSelectSmall';

const CountryPage = ({ data }) => {
  const [chartData, setChartData] = useState([]);

  const options = {
    title: "Estatísticas do COVID-19 no Brasil - Por estado",
    chartArea: { width: "60%", height: "90%",},
    colors: ['#1976d2', '#D56552', '#b5a952'],
    background: 'transparent',
    hAxis: {
      title: "Número de incidentes",
      minValue: 0,
    },
    vAxis: {
      title: "Estados",
    },
  };

  useEffect(() => {
    if (data?.length > 0) {
      setChartData(data);
    }

    () => {
      setChartData([]);
    }
  }, [data]);

  return (
    <main className={styles.mainContent}>
      <CustomSelectSmall
        setChartData={setChartData}
        actualChartData={data}
        id="order-select"
      />     
      <CustomBarChart data={chartData} type="byCountry" options={options}/>
    </main>
  );
};

export default CountryPage