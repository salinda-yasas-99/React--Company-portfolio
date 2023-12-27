import React from "react";
import Hero from "../components/Home components/Hero";
import Services from "../components/Home components/Services";
import Vision from "../components/Home components/Vision";
import Swipe from "../components/Home components/Swipe";

const Home = () => {
  return (
    <div>
      <section id="sec_1">
        <Hero />
      </section>
      <section id="sec_2">
        <Services />
      </section>
      <section id="sec_3">
        <Swipe />
      </section>
      <section id="sec_4">
        <Vision />
      </section>
    </div>
  );
};

export default Home;
