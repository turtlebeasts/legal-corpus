import { Card, CardContent, Grid, Typography } from "@mui/material";

const services = [
    {
        title: 'Licensing Services',
        services: [
            'Trade License',
            'Food License',
            'Drug License'
        ]
    },
    {
        title: 'Intellectual Property Rights',
        services: [
            'Tradmark Registration',
            'Wordmark Registration',
            'Copyright Registration'
        ]
    },
    {
        title: 'Statutory Compliances',
        services: [
            'GST Audit',
            'Statutory Audit',
            'Income tax filng'
        ]
    }
]

export default function Services() {
    return (
        <Grid container sx={{ textAlign: 'center', mt: 2, height: "50vh", display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} maxWidth={'md'}>
            <Grid item xs={12}>
                <Typography variant="h3" sx={{fontWeight: 900}} color={"primary"}>
                    Most engaged services
                </Typography>
                <Grid container spacing={2} sx={{pt: 2}}>
                {
                    services.map(item=>{
                        return(
                            <Grid item  md={4} xs={6} key={item.title}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6">{item.title}</Typography>
                                    <ul>
                                        {
                                            item.services.map(items=><li key={items}>{items}</li>)
                                        }
                                    </ul>
                                </CardContent>
                            </Card>
                            </Grid>
                        )
                    })
                }
                </Grid>
            </Grid>
        </Grid>
    )
}