import { Card, CardContent, Grid, Typography } from "@mui/material";

export default function Footer() {
    return (
        <Card>
            <CardContent style={{ backgroundColor: 'black', color: 'white' }}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Typography variant="h6">
                            Legal Corpus ®
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="p">
                            services
                        </Typography><br />
                        <Typography variant="p">
                            training
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="p">
                            companies
                        </Typography><br />
                        <Typography variant="p">
                            clients
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}