import { useEffect, useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import _ from 'lodash';
import styles from './CustomSelectSmall.module.sass';

const CustomSelectSmall = ({ setChartData, actualChartData }) => {
  const [order, setOrder] = useState('cases');

  const handleChange = (event) => {
    setOrder(event.target.value);
  };

  useEffect(() => {
    if (actualChartData?.length > 0) {
      setChartData(_.orderBy(actualChartData, order, 'desc'));
    }
  }, [order]);

  
  return (
    <FormControl sx={{ mb: 2, minWidth: 120 }} size="medium" className={styles.customSelectSmall}>
      <InputLabel
        id="demo-select-small"
        className={styles.demoSelectSmall}
      >
          Ordenar por
      </InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        className={styles.demoSelectSmall}
        value={order}
        label="Ordenar por"
        onChange={handleChange}
      >
        <MenuItem value="cases"><em>Padrão (Número de casos)</em></MenuItem>
        <MenuItem value="deaths">Número de mortes</MenuItem>
        <MenuItem value="suspects">Número de suspeitos</MenuItem>
      </Select>
    </FormControl>
  );
}

export default CustomSelectSmall