import { useState } from 'react';
import { Skeleton, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import styles from './StatesCard.module.sass';
import StateCard from './StateCard';
import { useCallback } from 'react';

const StatesCard = ({ data }) => {
  const [inputText, setInputText] = useState("");
  const inputHandler = (e) => {
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  const filteredData = data?.filter((el) =>
    inputText === ""
      ? el
      : el.state.toLowerCase().includes(inputText) ||
        el.uf.toLowerCase().includes(inputText)
  );

  const renderStateCard = useCallback((statesToRender) => statesToRender.length > 0 ? (
    statesToRender.map((stateData) => (
      <StateCard stateData={stateData} key={stateData.uid}/>
    ))) : (
      <Box sx={{minWidth: '280px'}}>
        <Typography className={styles.stateName} gutterBottom>
          Nenhum resultado
        </Typography>
      </Box>
    ), []);
  
  return (
    <section  className={styles.asideContainer}>
      <div className={styles.search}>
        <TextField
          id="searchState"
          onChange={inputHandler}
          variant="filled"
          fullWidth
          label="Buscar estado"
          autoComplete='off'
          color='primary'
          className={styles.searchState}
        />
      </div>
      {data.length > 0  ? (
        <div className={styles.asideItens}>
          {renderStateCard(filteredData)}
        </div>
      ) : (
        <>
          <Skeleton
            variant="rectangular"
            width="95%"
            height={115}
            sx={{ borderRadius: '10px', marginBottom: '10px', marginTop: '10px' }}
          />
          <Skeleton
            variant="rectangular"
            width="95%"
            height={115}
            sx={{ borderRadius: '10px', marginBottom: '10px'}}
          />
          <Skeleton
            variant="rectangular"
            width="95%"
            height={115}
            sx={{ borderRadius: '10px', marginBottom: '10px'}}
          />
        </>
      )}
    </section>
  )
}

export default StatesCard