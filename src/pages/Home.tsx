import ResponsiveAppBar from "./../components/organisms/Home/Header/Navigation";
import Section from "../components/organisms/Home/Content/SectionContent";
import { Grid, Typography, Button } from "@mui/material";

export const Home = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Section
        color="#f2f2f2"
        spacing={3}
        justifyContent="center"
        alignItems="center"
        direction="column"
        marginTop={100}
      >
        <Grid item xs={2} sm={4} md={4}>
          <Typography variant="h4">Agencia de seguros VHTAgent</Typography>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Typography>
            Bienvenido a nuestro sistema de aseguramiento de bienes
          </Typography>
        </Grid>
        <Grid container justifyContent="center" spacing={2} style={{marginTop:5}}>
          <Grid item>
            <Button variant="contained">Empezar</Button>
          </Grid>
          <Grid item>
            <Button variant="outlined">Ver mas</Button>
          </Grid>
        </Grid>
      </Section>
      <Section
        justifyContent="flex-start"
        marginTop={30}
      >
        <Grid item xs={2} sm={4} md={4}>
          <Typography variant="h4">Acerca de nosotros</Typography>
        </Grid>
        <Typography>
          Somos una empresa dedicada al aseguramento de bienes materiales, comprometidos con 
          nuestros clientes, ofreciendo diferentes tipos de servicios ante cualquier siniestro sucedido.
        </Typography>
      </Section>
    </>
  )
}
