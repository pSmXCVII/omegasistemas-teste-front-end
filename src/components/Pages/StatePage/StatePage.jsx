import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './StatePage.module.sass';
import StatesCard from '../../StatesCards/StatesCard';
import CustomBarChart from '../../Others/CustomBarChart/CustomBarChart';
import { Button, Skeleton, Typography } from '@mui/material';
import { useRecoilState } from 'recoil';
import isMobileState from '../../../atoms/isMobileState';

const StatePage = ({ data }) => {
  const isMobile = useRecoilState(isMobileState);
  const [especificStateStats, setEspecificStateStats] = useState({});
  const { uf } = useParams();

  const options = {
    title: `Estatística do COVID-19 por estado`,
    legend: { position: 'bottom'},
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
    <>
      <section className={styles.statePage}>
      {especificStateStats?.state ? (
        <>
          <Typography
            variant='h4'
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignContent: 'center',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '10px 0'}
            }
            className={styles.stateName}
          >
            {especificStateStats?.state} ({especificStateStats?.uf})
            {isMobile && 
              <Link to="/">
                <Button variant='outlined'>
                  Voltar
                </Button>
              </Link>
            }
          </Typography>
          <CustomBarChart data={especificStateStats} type="byState" options={options}/>
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
      {!isMobile && <StatesCard data={data}/>}
    </>
  )
}

export default StatePage;