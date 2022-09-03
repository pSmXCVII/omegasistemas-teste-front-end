import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Logo from '../../assets/imgs/covid-19.svg';
import TemporaryDrawer from '../TemporaryDrawer/TemporaryDrawer';
import styles from './Header.module.sass';
import LastUpdate from '../Others/LastUpdate/LastUpdate';

const ResponsiveAppBar = ({ lastUpdate }) => {
  return (
    <AppBar position="static">
      <Toolbar >
        <Box sx={{ flexGrow: 1, display: 'flex'}} >
          <Link to="/" >
            <Typography
              variant="h6"
              noWrap
              className={styles.brand}
            >
              <Box>
                <img src={Logo} className={styles.logo}/>
              </Box>
              <Box sx={{ display: 'flex'}} className={styles.brandText}>
                <span className={styles.title}>
                  COVID-19
                </span>
                <span className={styles.subtitle}>
                  Dashboard
                </span>
              </Box>
            </Typography>
          </Link>

        </Box>
        <LastUpdate lastUpdate={lastUpdate} />
        <TemporaryDrawer lastUpdate={lastUpdate}/>
      </Toolbar>
    </AppBar>
  );
};
export default ResponsiveAppBar;
