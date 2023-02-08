import "./App.css";
import NavBars from "./components/NavBars";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBars />
      <Banner />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
