import { useState} from 'react';
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
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import '../../styles/components/temporaryDrawer/temporaryDrawer.sass'

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
      label: 'Incidentes no Brasil', icon: <DashboardOutlinedIcon />
    },
    {
      label: 'Incidentes em cada estado', icon: <GridViewOutlinedIcon />
    },
  ];

  const ListItensMenu = () => (
    <Box
      sx={{ width: 400 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {itemMenu.map((text) => (
          <ListItem key={text.label} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {text.icon}
              </ListItemIcon>
              <ListItemText primary={text.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <>
      <Button
        onClick={toggleDrawer(true)}
        className="btn-drawer"
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
      </Drawer>
    </>
  );
}