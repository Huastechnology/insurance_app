import { Container } from "@mui/material"
import { Grid } from '@mui/material'

interface SectionContentProps {
    children?: React.ReactNode;
}

const Section = ({children}:SectionContentProps) => {
    return (
        <Container style={{
                paddingTop: 90,
                paddingRight: 0,
                paddingLeft: 0,
            }}
        >
            <Grid container justifyContent="center" spacing={3}>
                {children}
            </Grid>
        </Container>
    )
}
export default Section