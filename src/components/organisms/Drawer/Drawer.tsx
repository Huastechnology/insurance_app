import React from 'react'
import { Drawer } from './DrawerStyledComponent'
import { DrawerHeader } from './DrawerHeader'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

interface DrawerProps {
    open?: boolean;
    handleDrawerClose?: () => void;
    children?: React.ReactNode;
}

export const DrawerComponent = ({open,handleDrawerClose, children}:DrawerProps) => {
    const theme = useTheme();

    return(
        <Drawer variant="permanent" open={open} >
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </DrawerHeader>
            {children}
        </Drawer>
    )
}