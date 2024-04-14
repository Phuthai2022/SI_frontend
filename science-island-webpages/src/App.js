import { Box, Typography, Grid, Button } from "@mui/material";
import heroImage from "./images/heroImage.png"

function App() {
  return (
    <div className="App">
        {/* Hero Section */}
        <div>
          <Box>
              <Grid container spacing={8}>
                <Grid item xs={12} sm={4} md={4}>
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
                <Grid item xs={12} sm={8} md={8}>
                  <img src={heroImage} alt="Hero Image" />
                </Grid>
              </Grid>
          </Box>
        </div>
    </div>
  );
}

export default App;
