import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "./ContactForm";
import { H1, P } from "@/components/typography";
import Container from "../Container";

export default function Contact() {
  return (
    <Container id="contact" aria-label="Contact" className="mb-20">
      <H1>Get in Touch</H1>
      <div className="flex lg:flex-row flex-col gap-20 mt-10">
        <div className="lg:w-[600px]">
          <ContactForm />
        </div>
        <div className="flex flex-col lg:w-[600px] gap-4">
          <P className="flex flex-row items-center gap-2">
            <MapPin />
            Sankhamul, New Baneshwor
          </P>
          <P className="flex flex-row items-center gap-2">
            <Phone />
            9862587365
          </P>
          <P className="flex flex-row items-center gap-2">
            <Mail />
            alishakhatri8888@gmail.com
          </P>
          <div className="w-full  pb-[55.25%] relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d238.73158193744993!2d85.33442842532651!3d27.68126817172284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1721559797812!5m2!1sen!2snp"
              className="absolute top-0 left-0 w-full h-full"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            ></iframe>
          </div>
        </div>
      </div>
    </Container>
  );
}
