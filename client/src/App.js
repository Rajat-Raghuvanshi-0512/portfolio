import React from "react";
import {
  Header,
  Contact,
  Footer,
  Home,
  About,
  Work,
  Skills,
} from "./components";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Work />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
