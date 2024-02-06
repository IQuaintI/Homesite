import { Grid } from "@mui/material";
import Header from "./components/Header";
import Works from "./components/Works";
import Footer from "./components/Footer";
import "../src/css/App.scss";

function App() {
  return (
    <>
      <div className="scroll-container">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} id="header">
            <Header
              title="Hello."
              subtitle="I trust you are here to cause no trouble."
            />
          </Grid>
        </Grid>

        <Grid
          id="body"
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={5} id="content-left">
            <h2>1</h2>
          </Grid>
          <Grid item xs={2} id="hero">
            <Works title="Liminals" />
          </Grid>
          <Grid item xs={5} id="content-right">
            <h2>2</h2>
          </Grid>
        </Grid>
      </div>

      <Grid container>
        <Grid item xs={12} id="footer">
          <Footer title="Voices" />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
