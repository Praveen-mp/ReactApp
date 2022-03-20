import Container from "@mui/material/Container";
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import ImageCollage from "../Components/ImageCollage";
import CustomizedAccordians from "../Components/Accordian";
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import BasicModal from "../Components/Modal";
const Tour =()=>
     <Container sx={{width:900}}>
         <Typography variant="h3" compponent="h1" marginTop={3}>
             Explore the world in Vegas
         </Typography>
         <Box marginTop={3} sx={{display:"flex"}}>
           <img  src="https://media.timeout.com/images/105124791/750/422/image.jpg"
          height={325} sx={{marginRight:5}} width={550}></img>
            <ImageCollage/>
         </Box>
        <Box>
          <Typography variant="h6" component="h4" marginTop={3}>
             About this Ticket.
          </Typography>
          <Typography variant="paragraph" component="p" marginTop={3}>
          An online booking tool is a tool used by organisations to manage their business travel online. As well as making bookings, online booking tools usually allow organisations to view real-time data on their business travel spend, track their 
          travellers online and enforce business travel policy.
          </Typography>
        </Box>
        <Box marginBottom={10}>
          <Typography variant="h6" component="h4" marginTop={3}>
             Frequently Asked Questions
          </Typography>
          <Typography variant="paragraph" component="p" marginTop={3}>
          An online booking tool is a tool used by organisations to manage their business travel online. As well as making bookings, online booking tools usually allow organisations to view real-time data on their business travel spend, track their 
          travellers online and enforce business travel policy.
          </Typography>
          <CustomizedAccordians/>
        </Box>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation >
          <BasicModal/>
        </BottomNavigation>
      </Paper>
     </Container>;

export default Tour;