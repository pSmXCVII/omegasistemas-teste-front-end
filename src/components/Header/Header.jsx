import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box, Skeleton } from '@mui/material';
import Logo from '../../assets/imgs/covid-19.svg';
import { elapsedTime } from '../../utils/dateCalculator';
import TemporaryDrawer from '../TemporaryDrawer/TemporaryDrawer';
import styles from './Header.module.sass';

const ResponsiveAppBar = ({ lastUpdate }) => {
  const [dateToRender, setDateToRender] = useState();

  useEffect(() => {
    if (lastUpdate)
    setDateToRender(elapsedTime(lastUpdate));
    return () => {
      setDateToRender();
    }
  }, [lastUpdate]);

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
              <Box sx={{ display: 'flex'}}>
                <span>
                  COVID-19 | Dashboard
                </span>
              </Box>
            </Typography>
          </Link>

        </Box>
        {dateToRender ? (
          <Box sx={{ flexGrow: 0}} className={styles.badgeLastUpdate}>
            Dados atualizados há {dateToRender}
          </Box>
        ) : (
          <Skeleton
            variant="rectangular"
            width={280}
            height={48}
            sx={{ borderRadius: '10px' }}
          />
        )}
        <TemporaryDrawer className={styles.mobileDrawer}/>
      </Toolbar>
    </AppBar>
  );
};
export default ResponsiveAppBar;
