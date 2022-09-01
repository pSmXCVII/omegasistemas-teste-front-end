import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Logo from '../assets/imgs/covid-19.svg';
import '../styles/components/header.sass';
import { Box } from '@mui/material';

const ResponsiveAppBar = ({ lastUpdate }) => {

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1}}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <img src={Logo} className="logo"/>
              COVID-19 | Dashboard
            </Typography>

          </Box>
          <Box sx={{ flexGrow: 0}} className="badge-last-update">
            Última atualização: 01/09/2022 às 23:59
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
