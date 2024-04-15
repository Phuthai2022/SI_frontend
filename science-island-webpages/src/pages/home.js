import { Box, Typography, Grid, Button, Container } from "@mui/material";
import heroImage from "../images/heroimage.png";
import placeholderImage from "../images/placeholderimage.jpeg";
import ReactPlayer from 'react-player';
import Nav from "../components/nav.js";
//Importing stylesheet for page here...
import "../stylesheets/homepage.css"
import "../stylesheets/global.css"

function Homepage() {
  return (
    <div className="App">

        <Nav></Nav>
        {/* Hero Section */}
        {/* Delete this sx margin top when header is added. */}
        <Container maxWidth="xl" className="container">
              <Grid container spacing={8}>
                <Grid item xs={12} sm={12} md={5} lg={4} textAlign={"center"} alignContent={"center"}>
                  <Typography variant="h3" >
                    Acclaimed Gamified Education Platform for Primary to PhD
                  </Typography>
                  <Typography variant="h6">
                  Over 100,000+ hours of research and development, Science Island offers captivating animated videos, games, quizzes, and experiments!
                  </Typography>
                  <Button variant="contained" color="primary">
                    Play Now
                  </Button>
                </Grid>
                <Grid item xs={12} sm={12} md={7} lg={8}>
                  <img src={heroImage} alt="Hero Image" className="hero-image" />
                </Grid>
              </Grid>
        </Container>

        {/* Should have an awards section here which scrolls through some stuff. Or, schools which scrolls through */}
        <Container>
          <Grid item xs={12} lg={12} textAlign={"center"}>
            <Typography variant="h2" color={"grey"}>Award/Universities Contribution Section Should Be Here. Logos Only. Pref Scrolling.</Typography>
          </Grid>
        </Container>

        {/* Video Section */}
        <Container maxWidth="xl" className="container" >
          <Grid container justifyContent={"center"} alignItems={"center"} display={"flex"} flexDirection={"column"}>
            <Grid item xs={12} sm={12} md={12} lg={12} sx={{textAlign: "center"}} >
              <Typography variant="h3">
                Introducing Science Island
              </Typography>
              <Typography variant="h6">
                Calling All Curious Minds: Science Island Awaits! Seeking all Young Explorers and Future Scientists!
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <ReactPlayer url="https://vimeo.com/210883372" controls className="react-player"/>
            </Grid>
          </Grid>
        </Container>

        {/* Why Use Science Island Section */}
        <Container maxWidth="xl" className="container">
          <Grid container spacing={4} textAlign={"center"}>
              <Grid item lg={12}>
                <Typography variant="h3">
                  Why Use Science Island?
                </Typography>
              </Grid>
              <Grid item lg={3} md={6} sm={6} xs={6}>
                <Box className="why-section-box">
                  <Typography variant="h5">Learn from the Best</Typography>
                  <img src={placeholderImage} alt="Placeholder Image"></img>
                  <Typography variant="h6">Benefit from the expertise of world leading scientists and educators.</Typography>
                </Box>
              </Grid>
              <Grid item lg={3} md={6} sm={6} xs={6}>
                <Box className="why-section-box">
                <Typography variant="h5">Fueling Lifelong Learning</Typography>
                  <img src={placeholderImage} alt="Placeholder Image"></img>
                  <Typography variant="h6">
                  Explore complex scientific concepts, fostering curiosity and independence. 
                </Typography>
                </Box>
              </Grid>
              <Grid item lg={3} md={6} sm={6} xs={6}>
                <Box className="why-section-box">
                <Typography variant="h5">Make Learning Fun</Typography>
                  <img src={placeholderImage} alt="Placeholder Image"></img>
                  <Typography variant="h6">Say goodbye to boring textbooks, instead embrace engaging challenges, and interactive activities.</Typography>
                </Box>
              </Grid>
              <Grid item lg={3} md={6} sm={6} xs={6}>
                <Box className="why-section-box">
                <Typography variant="h5">Inspiring Future Minds</Typography>
                  <img src={placeholderImage} alt="Placeholder Image"></img>
                  <Typography variant="h6">Showcasing science and technology in a fun, engaging way. We aim to ignite a passion
                  for learning and discovery.</Typography>
                </Box>
              </Grid>
          </Grid>
        </Container>
    </div>
  );
}

export default Homepage;
