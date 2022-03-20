import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating'
import  {AccessTime} from '@mui/icons-material';
import {createTheme,ThemeProvider} from '@mui/material';
const theme = createTheme({
    components:{
        MuiTypography:{
            variants:[
                {
                    props:{
                        variant:"body2",
                    },
                    style:{
                        fontSize:11,
                    }
                },
                {
                    props:{
                        variant:"body2",
                    },
                    style:{
                        fontSize:11,
                    }
                }
            ]
        }
    }
})
const search =({tour})=>{
    return(
    <Grid item xs={3}>
        <ThemeProvider theme={theme}>
    <Paper elevation={3}>
        <img src={tour.image}
         alt="Currently unavailable" className="img"/>
         <Box paddingX={2}>

         <Typography paddingX={1} variant='subtitle1' component='h2'>
               {tour.name}
         </Typography>

         <Box sx={{display:"flex",alignItems:"center"}}>
         <AccessTime sx={{width: 12.5,marginX:0.5,marginBottom:0.5,marginTop:0.3}}/>
          <Typography variant="body2" component="p" paddingY={0.6}>
              {tour.duration} hours
          </Typography>
         </Box>
         <Box sx={{display:"flex",alignItems:"center"}}>
         {/* <Typography component="legend">Read only</Typography> */}
      <Rating name="read-only" value={tour.rating} readOnly precision={0.5} size="small"/>
      <Typography variant="body2" component="p" paddingY={0.3} >
           {tour.rating}
      </Typography>
      <Typography variant="body2" component="p" paddingY={0.2}  marginLeft={0.5}>
         ({tour.numberOfReviews} reviews)
      </Typography>         
         </Box>
        <Box>
        <Typography variant="h6" component="h3" marginTop={0}>
            From C ${tour.price}
       </Typography>
        </Box>
         </Box>
         
         
         
        </Paper> 
        </ThemeProvider> 
  </Grid>
    )    
       
  
}
export default search;