import { Grid, Typography } from "@mui/material";

export default function Companies(){
    return(
        <Grid container spacing={2} sx={{mt: 5, textAlign: "center", height: "50vh"}} maxWidth={"md"}>
            <Grid item xs={12}>
                <Typography variant="h3" color={"primary"} sx={{fontWeight: 900}}>Our valuable companies</Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
                <img width={'100%'} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthreebestrated.in%2Fimages%2FAnsalHousing-Agra-UP.jpeg&f=1&nofb=1&ipt=21a60c45c31425fa4be6d0032707bf729078cb9f5e6ca990b8ecf64bb089c3fe&ipo=images" alt="ansal housing" />
            </Grid>
            <Grid item xs={6} sm={3}>
                <img width={'100%'} src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F4.bp.blogspot.com%2F-xuZmkKaNsEM%2FVWsliFuKKhI%2FAAAAAAAACz8%2FPlL7PBcXf8M%2Fs1600%2Fmaruti-suzuki-vector-logo.png&f=1&nofb=1&ipt=1ed95b45843b8e085505a25393663ccb1fd31023a195b63407455b3c90648e47&ipo=images" alt="Maruti suzuki" />
            </Grid>
            <Grid item xs={6} sm={3}>
                <img width={'100%'} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2Fa%2FAATXAJzZgUX5yiHhmYAZJ10xGbtfTdxrqAAEYn8CiQ%3Ds900-c-k-c0xffffffff-no-rj-mo&f=1&nofb=1&ipt=4ca6d0cda165309cebe6eba3d957ec32dec6ab3ee758d0426ad03ba089158d34&ipo=images" alt="TP films" />
            </Grid>
            <Grid item xs={6} sm={3}>
                <img width={'100%'} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia1.thehungryjpeg.com%2Fthumbs2%2Fori_4730_17a8e6ca6c62eaf36976bb50638dd526c2b34a10_film-production-logo.jpg&f=1&nofb=1&ipt=49b7888466deef2eaa429d7ef536bbc7644644e1a364378bb89d3f83227e4405&ipo=images" alt="Shanti film production" />
            </Grid>
        </Grid>
    )
}