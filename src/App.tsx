import HeroBanner from "./components/heroBanner";
import Body from "./components/body";
import Footer from "./components/Footer";
import "./styles/App.scss";

function App() {
  return (
    <div className="App">
      <HeroBanner />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
