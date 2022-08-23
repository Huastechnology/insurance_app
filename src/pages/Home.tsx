import ResponsiveAppBar from './../components/organisms/Home/Header/Navigation';
import Section from '../components/organisms/Home/Content/SectionContent';
import { Grid } from '@mui/material'
export const Home = () => {

  return (
    <>
      <ResponsiveAppBar/>
      <Section>
        <Grid item>
          <h1>Home</h1>
        </Grid>
        <Grid item>
          <h1>Home2</h1>
        </Grid>
      </Section>
    </>
  );
}