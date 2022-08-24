import { Container ,Grid} from "@mui/material"

interface SectionContentProps {
    children?: React.ReactNode;
    color?: string;
    justifyContent?:string
    spacing?:number
    direction?: any
    alignItems?: string
    marginTop?:number
}

const Section = ({
    children, 
    color, 
    justifyContent,
    spacing,
    direction,
    alignItems,
    marginTop,
}:SectionContentProps) => {
    return (
        <Container style={{
                marginTop: marginTop,
                paddingTop: 0,
                paddingBottom: 50,
                paddingRight: 0,
                paddingLeft: 0,
                backgroundColor: color,
            }}
        >
            <Grid 
                container 
                justifyContent={justifyContent} 
                spacing={spacing}
                direction={direction}
                alignItems={alignItems}
            >
                {children}
            </Grid>
        </Container>
    )
}
export default Section