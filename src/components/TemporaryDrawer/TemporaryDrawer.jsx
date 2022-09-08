import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import { Link } from 'react-router-dom';
import styles from './TemporaryDrawer.module.sass';
import LastUpdate from '../Others/LastUpdate/LastUpdate';

export default function TemporaryDrawer() {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawerIsOpen(open);
  };

  const itemMenu = [
    {
      label: 'Incidentes em cada estado',
      icon: <GridViewOutlinedIcon />,
      locate: '/'
    },
    {
      label: 'Incidentes no Brasil',
      icon: <DashboardOutlinedIcon />,
      locate: '/brasil'
    },
  ];

  const ListItensMenu = () => (
    <Box
      className={styles.listItensMenu}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Button
        onClick={toggleDrawer(false)}
        className={styles.btnClose}
        title="drawer"
      >
        <CloseOutlinedIcon />
      </Button>
      <List>
        {itemMenu.map((item) => (
          <Link key={item.label} to={item.locate}>
            <ListItem  disablePadding>
              <ListItemButton>
                  <ListItemIcon>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <>
      <Button
        onClick={toggleDrawer(true)}
        className={styles.btnDrawer}
        title="drawer"
      >
        <MenuIcon />
      </Button>
      <Drawer
        anchor='right'
        open={drawerIsOpen}
        onClose={toggleDrawer(false)}
      >
        <ListItensMenu />
        <LastUpdate hideable={false}/>
      </Drawer>
    </>
  );
}