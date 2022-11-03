import Contact from "./components/Contact/Contact";
import Topbar from "./components/Topbar/Topbar";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import "./app.scss";

function App() {
  return (
    <>
      <header>
        <Topbar />
      </header>
      <main>
        <Projects />
        <About />
        <Contact />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
