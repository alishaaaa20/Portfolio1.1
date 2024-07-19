import React from "react";
import Container from "../Container";
import Title from "../Title";
import DesktopFeature, { FeatureMobile } from "../DesktopFeature";

const Feature = () => {
  return (
    <section
      id="about-me"
      aria-label="Features for investing all your money"
      className="bg-white py-10 sm:py-20"
    >
      <Container>
        <div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-3xl">
          <Title title="About Me" className="text-black font-bold text-2xl" />
          <p className="mt-2 text-lg text-gray-600 text-justify">
            I'm a final-year IT Engineer at the Nepal College of Information
            Technology (NCIT) with a passion for technology and web development.
            I'm a quick learner, team player, and effective communicator, always
            eager for new challenges and opportunities to grow. Dedicated and
            hardworking, I'm ready to go the extra mile to achieve my goals.
          </p>
        </div>
      </Container>
      {/* Desktop View */}
      <div className="hidden md:mt-20 md:block max-w-screen-xl mx-auto">
        <DesktopFeature />
      </div>
      {/* Mobile View */}
      <div className="mt-16 md:hidden">
        <FeatureMobile />
      </div>
    </section>
  );
};

export default Feature;
