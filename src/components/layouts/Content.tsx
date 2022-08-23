
import Box from '@mui/material/Box';

interface propTypes {
    children: React.ReactNode;
}

const Content = (props:propTypes) => (
    <Box component="main" sx={{flexGrow: 1, p:3}}>
        {props.children}
    </Box>
)

export default Content;