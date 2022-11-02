import Contact from "./components/Contact/Contact";
import Topbar from "./components/Topbar/Topbar";
import Menu from "./components/Menu/Menu";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import "./app.scss";

function App() {
  return (
    <>
      <div className="app">
        <Topbar />
      </div>
      <div className="sections">
        <Projects />
        <About />
        <Contact />
      </div>
    </>
  );
}

export default App;
