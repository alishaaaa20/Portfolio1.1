import React from "react";
import Container from "../Container";
import Title from "../Title";
import { Button } from "../ui/button";
import { BiDownload, BiSolidContact } from "react-icons/bi";
import { GiClover } from "react-icons/gi";

const Hero = () => {
  return (
    <section
      id="home"
      className="py-20 bg-secondary text-white h-[86vh] flex items-center"
    >
      <Container>
        <div className="flex flex-col items-center justify-center text-center">
          <Title
            className="mb-4 inline-block rounded-full bg-white text-primary px-6 py-2 text-xl shadow-lg animate-slideIn"
            title="👋 Hello there!"
          />
          <h1 className="text-3xl font-bold md:text-5xl leading-tight animate-fadeIn text-black">
            I'm Alisha Khatri.
          </h1>

          <p className="mt-6 text-lg text-black max-w-2xl animate-fadeIn delay-500">
            I'm a passionate and creative Software Engineer with a strong
            interest in open-source technologies. I love building scalable
            applications and solving complex problems.
          </p>
          <div className="mt-10 flex justify-center lg:justify-start flex-wrap items-center gap-4 animate-scaleUp delay-700">
            <a href="#about-me">
              <Button
                variant="outline"
                className="border border-primary text-primary text-lg font-mediuim tems-center rounded-lg hover:bg-primary hover:text-white transition-all duration-300 bg-transparent"
              >
                <GiClover className="text-xl" />
                <span className="ml-2.5">About Me</span>
              </Button>
            </a>
            <a href="#contact">
              <Button
                variant="outline"
                className="border border-primary text-primary text-lg font-medium items-center rounded-lg hover:bg-primary hover:text-white transition-all duration-300 bg-transparent"
              >
                <BiSolidContact className="text-xl" size={25} />
                <span className="ml-2.5">Contact Me</span>
              </Button>
            </a>
          </div>
          <div className="mt-5">
            <a href="/Alisha_Khatri_Resume.pdf" download>
              <Button
                variant="outline"
                className="border border-primary text-white text-lg font-medium items-center rounded-lg hover:bg-primary/50 hover:text-black transition-all duration-300 bg-primary"
              >
                <BiDownload className="text-xl" size={25} />
                <span className="ml-2.5">Download CV</span>
              </Button>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
