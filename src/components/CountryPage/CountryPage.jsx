import { useEffect, useState } from 'react'
import CustomBarChart from '../utils/CustomBarChart';
import CustomSelectSmall from '../utils/CustomSelectSmall';

const CountryPage = ({ data }) => {
  const [dataToRender, setDataToRender] = useState([]);

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
      setDataToRender(data.reduce((acc, item) => (
        [...acc, [item.state, item.cases, item.deaths, item.suspects]]
      ), [['Estado', 'Casos', 'Mortes', 'Suspeitos']]));
    }

    () => {
      setDataToRender([]);
    }
  }, [data]);
  return (
    <>
      <CustomSelectSmall
        setDataToRender={setDataToRender}
        actualChartData={data}
        id="order-select"
      />     
      <CustomBarChart data={data} type="byCountry" options={options}/>
    </>
  )
}

export default CountryPage