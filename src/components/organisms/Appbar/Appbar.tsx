import { AppBar } from './AppbarEngine'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography'

interface NavbarProps {
    open?: boolean;
    handleDrawerOpen?: () => void;
}

export const Navbar = (props:NavbarProps) => {
    return (
        <AppBar position='fixed'>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={props.handleDrawerOpen}
                    edge="start"
                    sx={{
                    marginRight: 5,
                        ...(props.open && { display: 'none' }),
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                    Mini variant drawer
                </Typography>
            </Toolbar>
        </AppBar>
    )
}