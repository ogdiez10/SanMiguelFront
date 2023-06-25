import './UI.css';
import { useState } from "react";
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LineAxisIcon from '@mui/icons-material/LineAxis';
import HistoryIcon from '@mui/icons-material/History';
import HailIcon from '@mui/icons-material/Hail';

const Nav = () => {

    return (

        <Paper elevation={2} sx={{ width: '100%', maxWidth:320, height:'100%' }}>
        <MenuList>
          <MenuItem>
            <ListItemIcon>
                <AddShoppingCartIcon></AddShoppingCartIcon>
            </ListItemIcon>
            <ListItemText>Cobrar</ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon>
                <LineAxisIcon></LineAxisIcon>
            </ListItemIcon>
            <ListItemText>Resumen</ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon>
                <HistoryIcon></HistoryIcon>
            </ListItemIcon>
            <ListItemText>Órdenes</ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon>
                <HailIcon></HailIcon>
            </ListItemIcon>
            <ListItemText>Proveedores</ListItemText>
          </MenuItem>
        </MenuList>
      </Paper>
    );




}

export default Nav;