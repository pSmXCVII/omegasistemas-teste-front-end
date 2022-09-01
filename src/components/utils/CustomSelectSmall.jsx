import { useEffect, useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import _ from 'lodash';
import '../../styles/utils/customSelectSmall.sass'

const CustomSelectSmall = ({ setDataToRender, actualChartData }) => {
  const [order, setOrder] = useState('cases');

  const handleChange = (event) => {
    setOrder(event.target.value);
  };

  useEffect(() => {
    if (actualChartData?.length > 0) {
      setDataToRender(_.orderBy(actualChartData, order, 'desc').reduce((acc, item) => (
        [...acc, [item.state, item.cases, item.deaths, item.suspects]]
      ), [['Estado', 'Casos', 'Mortes', 'Suspeitos']]));
    }
  }, [order]);

  return (
    <FormControl sx={{ mb: 2, minWidth: 120 }} size="medium" className="custom-select-small">
      <InputLabel id="demo-select-small">Ordenar por</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
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