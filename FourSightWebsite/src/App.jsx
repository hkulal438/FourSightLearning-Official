import React from "react";
import Layout from "./Layout/Layout";
import Hero from "./Hero/CarouselHero";
import About from "./About/About";
import Team from "./Team/Team";
import WhyChoose from "./WhyChoose/WhyChoose";
import Contact from './Contact/Contact'

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Team />
      <WhyChoose />
      <Contact/>
    </Layout>
  );
}

export default App;
