import Contact from "./components/Contact/Contact";
import Topbar from "./components/Topbar/Topbar";
import Menu from "./components/Menu/Menu";
import Intro from "./components/Intro/Intro";
import Projects from "./components/Projects/Projects";
import "./app.scss";

function App() {
  return (
    <>
      <div>Hello world</div>
      <div className="app">
        <Topbar />
        <Menu />
      </div>
      <div className="sections">
        <Intro />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
