import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works } from './components';
import Certefications from "./components/Certefications";

const App = () => {
  return (
    <BrowserRouter>
      <div className="realtive z-0">
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <Navbar />
          <Hero />
        </div>
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Certefications />
      {/* <Feedbacks /> */}
      <div className="relative z-0">
        <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App;