// import React,{ Component } from 'react';
// import Navbar from './Components/Navbar';
// import SearchPage from './Components/Search';
// import { Button } from 'reactstrap';
// import NavMui from './Components/NavMui';
import Search from "../Components/Search";
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Container, Typography} from "@mui/material"

import cities from "../data.json";
const Home = ()=>(
    <div className="App">
      {/* <Navbar/> */}
     
      <Container sx={{marginY:4}}>
        {cities.map((city)=>(
          <>
          <Typography 
          variant="h4"
          component="h2"
          marginTop={2}
          marginBottom={3}
          >
            Top {city.name} Tours
          </Typography>

          <Grid container={5} spacing={5}>
           {city.tours.map((tour,index)=> <Search tour={tour} key={index}/>)}
          </Grid>
          </>
        ))}
       
      </Container>
      
      
    </div>
)
export default Home;