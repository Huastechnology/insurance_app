import React from 'react'
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { Navbar } from '../organisms/Appbar/Appbar';
import { DrawerComponent } from '../organisms/Drawer/Drawer';
import Divider from '@mui/material/Divider';
import { Sidebar } from '../layouts/Sidebar';
import  Content  from '../layouts/Content';

interface dashboardProps{
    children: React.ReactNode;
}

export const WithDashboard = (props:dashboardProps) =>{
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    }

    const handleDrawerClose = () => {
        setOpen(false);
    }

    return(
        <Box sx={{ display:'flex' }}>
            <CssBaseline />
            <Navbar open={open} handleDrawerOpen={handleDrawerOpen} />
            <DrawerComponent open={open} handleDrawerClose={handleDrawerClose}>
                <Divider/>
                <Sidebar open={open}/>
            </DrawerComponent>
            <Content>
                {props.children}
            </Content>
        </Box>
    )
}