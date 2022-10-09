import React from "react";
import { Header, Footer, Home, About, Work, Skills } from "./components";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Work />
        <Skills />
      </main>
      <Footer />
    </>
  );
};

export default App;
