import MainHeader from "./components/Header/MainHeader";
// import Contact from "./components/Contact/Contact";
import Navbar from "./components/Topbar/Navbar";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import "./app.scss";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </>
  );
}

export default App;
