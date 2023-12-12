import { Grid } from "@mui/material";
import WWA from "../../containers/WWA";
import WU from "../../containers/WU";
import Services from "../../containers/Service/services";
import Companies from "../../containers/Companies/companies";

export default function Home(){
    return (
        <Grid container sx={{pt: 2,display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <WWA />
            <WU />
            <Services />
            <Companies />
        </Grid>
    )
}