import { Link } from "react-router-dom";
import { LogIn } from '../organisms/LogIn';
import { LogInImage } from '../atoms/LogInImage';
import { Grid, Box } from '@mui/material';

export const LogInLayout = () => (
  <Grid item>
    <Box sx={{display: 'flex', justifyContent: 'center', marginTop: '20px', alignItems: 'center', gap: '20px', textAlign: 'center', flexWrap: 'wrap'}}>
      <LogInImage />
      <LogIn />
      <Link to="/"> Home </Link>
    </Box>
  </Grid>
);