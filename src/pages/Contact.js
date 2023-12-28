import { Grid, Typography } from "@mui/material";
import React from "react";
import ContactForm from "../components/Home components/ContactForm";
import ContactHero from "../components/Home components/ContactHero";

function Contact() {
  return (
    <div className="contact-us">
      <section id="con_sec_1">
        <ContactHero />
      </section>
      <section id="con_sec_2">
        <ContactForm />
      </section>
    </div>
  );
}

export default Contact;
