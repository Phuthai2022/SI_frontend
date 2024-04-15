import { Box, Typography, Grid, Button, Container } from "@mui/material";
import heroImage from "./images/heroimage.png";
import ReactPlayer from 'react-player';
//Importing stylesheet for page here...
import "./stylesheets/homepage.css"
import "./stylesheets/global.css"

function App() {
  return (
    <div className="App">
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
          <Grid xs={12} lg={12} textAlign={"center"}>
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
                Calling All Curious Minds: Science Island Awaits! Perfect for Young Explorers and Future Scientists!
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
              <Grid item lg={3}>
                <Box className="why-section-box">
                  <h3>Inspire Lifelong Learning</h3>
                  <img src=""></img>
                  <p></p>
                </Box>
              </Grid>
              <Grid item lg={3}>
                <Box className="why-section-box">
                  <h3>The</h3>
                </Box>
              </Grid>
              <Grid item lg={3}>
                <Box className="why-section-box">
                  <h3>The</h3>
                </Box>
              </Grid>
              <Grid item lg={3}>
                <Box className="why-section-box">
                  <h3>The</h3>
                </Box>
              </Grid>
          </Grid>
        </Container>
    </div>
  );
}

export default App;
