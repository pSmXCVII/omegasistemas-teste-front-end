import { useEffect, useState } from 'react';
import styles from './MainPage.module.sass';
import CustomBarChart from '../../Others/CustomBarChart/CustomBarChart';
import CustomSelectSmall from '../../Others/CustomSelectSmall/CustomSelectSmall';
import StatesCard from '../../StatesCards/StatesCard';
import { Skeleton } from '@mui/material';

const MainPage = ({ data }) => {
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
    <>
      <section className={styles.mainContent}>
        {data.length > 0 ? (
          <>
            <CustomSelectSmall
              setChartData={setChartData}
              actualChartData={data}
              id="order-select"
            />
            <CustomBarChart data={chartData} type="byCountry" options={options}/>
          </>
        ) : (
          <>
            <Skeleton
              variant="rectangular"
              width="99%"
              height={48}
              sx={{ borderRadius: '10px'}}
            />
            <Skeleton
              variant="rectangular"
              width="99%"
              height='80vh'
              sx={{ borderRadius: '10px', marginTop: '10px' }}
            />
          </>
        )}
      </section>
      <StatesCard data={data}/>
    </>
  );
};

export default MainPage