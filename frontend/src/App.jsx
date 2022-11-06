import MainHeader from "./components/Header/MainHeader";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Topbar/Navbar";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import "./app.scss";

function App() {
  return (
    <>
      <header>
        {/* <Topbar /> */}
        <Navbar />
      </header>
      <main>
        <MainHeader />
        <Projects />
        <About />
        <Contact />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
