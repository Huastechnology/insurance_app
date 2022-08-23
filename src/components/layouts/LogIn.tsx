import { RouteComponentProps, Link } from '@reach/router'
import Box from '@mui/material/Box';
import { LogIn } from '../organisms/LogIn';
import { LogInImage } from '../atoms/LogInImage';

export const LogInLayout = (props: RouteComponentProps) => (
  <Box sx={{display: 'flex', justifyContent: 'center', marginTop: '20px', alignItems: 'center', gap: '20px', textAlign: 'center'}}>
    <LogInImage />
    <LogIn />
    <Link to="/"> Home </Link>
  </Box>
);