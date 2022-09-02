import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts'

const CustomBarChart = ({ data, type, options}) => {
  const [dataToRender, setDataToRender] = useState([]);
  useEffect(() => {
    if (type === 'byCountry') {
      if (data?.length > 0) {
        setDataToRender(data?.reduce((acc, item) => (
          [...acc, [item.state, item.cases, item.deaths, item.suspects]]
        ), [['Estado', 'Casos', 'Mortes', 'Suspeitos']]));
      }
    } else {
      setDataToRender([
        ['', 'Casos', 'Mortes', 'Suspeitos'],
        [data?.state, data?.cases, data?.deaths, data?.suspects],
      ]);
    };

    () => {
      setDataToRender([]);
    }
  }, [data, type]);
  return (
    <Chart
      key={type === 'byCountry' ? data?.country : data?.uf}
      chartType='BarChart'
      width="100%"
      height='100%'
      data={dataToRender}
      options={options}
      legendToggle={type === 'byCountry' ? true : false}
      className="chart"
    />
  )
}

export default CustomBarChart