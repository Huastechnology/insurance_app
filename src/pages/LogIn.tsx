import { LogInLayout } from '../components/layouts/LogIn';
import { Grid } from '@mui/material';

export const LogInPage = () => {
  return (
    <Grid container justifyContent="center" marginTop={10}>
      <LogInLayout />
    </Grid>
  );
}