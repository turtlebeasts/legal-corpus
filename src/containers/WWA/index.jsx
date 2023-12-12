import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import image from "../../assets/courtroom.jpg"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function WWA() {
    return (
        <Grid container spacing={2} maxWidth={"md"} sx={{height: {xs:'80vh', sm: '100vh'}, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Grid item xs={12} sm={6} sx={{textAlign: {xs: 'center', sm: 'left'}}}>
                <Typography variant="h2" sx={{fontWeight: 900}} color={'primary'}>
                    Legal Corpus
                </Typography>
                <Typography variant="h5" color={"text.secondary"}>
                    Who we are?
                </Typography>
                <Typography variant="body1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Typography>
                <Button sx={{mt: 2}} variant="contained" endIcon={<ArrowForwardIosIcon />}>CONTACT US</Button>
            </Grid>
            <Grid item xs={12} sm={6} sx={{display: {xs: 'none', sm: 'block'}}}>
                <img src={image} alt="court room" width='100%'/>
            </Grid>
        </Grid>
    )
}