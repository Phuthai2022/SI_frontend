import { Box, Typography, Grid, Button, Container } from "@mui/material";
import heroImage from "./images/heroimage.png"
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
                     Science Island: Where Learning and Fun Collide!
                  </Typography>
                  <Typography variant="h6">
                  Adventure, Discovery, and Learning Await! Join Forces with Global Experts to Experience an Immersive Educational Journey Like No Other!
                  </Typography>
                  <Button variant="contained" color="primary">
                    Join Us
                  </Button>
                </Grid>
                <Grid item xs={12} sm={12} md={7} lg={8}>
                  <img src={heroImage} alt="Hero Image" className="hero-image" />
                  <figcaption style={{color: "red"}}>*To be replaced by HD image. Can be replaced by a slideshow also.</figcaption>
                </Grid>
              </Grid>
        </Container>
        {/* Video Section */}
        <Container maxWidth="xl" className="container">
          <Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} textAlign={"center"}>
              <Typography variant="h3">
                Introduction Video text text text
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              
            </Grid>
          </Grid>
        </Container>
    </div>
  );
}

export default App;
