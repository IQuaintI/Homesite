import { Grid } from "@mui/material";
import Header from "./components/Header";
import Works from "./components/Works";
import "../src/css/App.scss";

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// Import Bootstrap JS only if needed, and ensure you have jQuery and Popper.js if you do


import Card from "./assets/Card";
import Rx from "/rxSymbol.png";
import linkedInLogo from "/linkedInLogo.png";
import Linkedin from "./assets/Linkedin";
import trash from "/trash.jpg";

function App() {
  return (
    <>
      {/* Header */}
      <div id="scroll-container">
        <section className="snap-section">
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12} id="header">
              <Header
                title="Hello."
                subtitle="I trust you are here to cause no trouble."
              />
            </Grid>
          </Grid>
        </section>

        {/* Body */}
        <section className="snap-section">
          <Grid
            id="body"
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            style={{ height: "100vh" }}
          >
            {/* Content-Left */}
            <Grid item xs={5} id="content-left">
              <Card
                image={trash}
                title="This Website"
                subtitle="A small collection of rabble."
                source="https://github.com/IQuaintI/Homesite"
                site="https://agomez.me/"
              />
            </Grid>

            {/* Works */}
            <Grid item xs={2} id="hero">
              <div 
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/alex-gomez-87309b12b/"
                  )
                }
              >
                <Works children={<Linkedin image={linkedInLogo} />} />
              </div>
            </Grid>

            {/* Content-Right */}
            <Grid item xs={5} id="content-right">
            <Card
                image={Rx}
                title="Recipe Book"
                subtitle="A proving ground for React, TypeScript, and SCSS. A useful start."
                source="https://github.com/IQuaintI/realRecipeBook"
                site="https://recipebooktesting.netlify.app/"
              />
            </Grid>
          </Grid>
        </section>
      </div>
    </>
  );
}

export default App;
