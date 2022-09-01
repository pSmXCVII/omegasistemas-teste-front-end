import { useState } from 'react';
import '../styles/components/asideContainer.sass';
import { TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import AsideCard from './Aside/AsideCard';

const AsideContainer = ({ data }) => {
  const [inputText, setInputText] = useState("");
  const inputHandler = (e) => {
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  const filteredData = data.filter((el) =>
    inputText === ""
      ? el
      : el.state.toLowerCase().includes(inputText) ||
        el.uf.toLowerCase().includes(inputText)
  );
  return (
    <aside  className="aside-container">
      <div className="search">
        <TextField
          id="searchState"
          onChange={inputHandler}
          variant="filled"
          fullWidth
          label="Buscar estado"
          autoComplete='off'
          color='primary'
        />
      </div>
      <div className="aside-itens">
        {filteredData.length > 0 ? filteredData.map((stateData) => (
          <AsideCard stateData={stateData} key={stateData.uid}/>
        )) : (
          <Box sx={{minWidth: '280px'}}>
            <Typography className='stateName' gutterBottom>
              Nenhum resultado
            </Typography>
          </Box>
        )}
      </div>
    </aside>
  )
}

export default AsideContainer