import React from "react";
import Container from "../Container";
import Title from "../Title";
import { Button } from "../ui/button";
import BackgroundDesign from "../BackgroundDesign";
import { BiDownload } from "react-icons/bi";

const Hero = () => {
  return (
    <section
      id="home"
      className="overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36"
    >
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          {/* Right side */}
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6 text-center lg:text-left">
            <Title
              className="mb-1.5 inline-block rounded-full bg-secondary px-4 py-2 text-xl"
              title="👋 Hello there!"
            />
            <h1 className="text-black text-2xl font-semibold sm:text-3xl md:text-4xl leading-tight">
              I'm Alisha Khatri.
            </h1>

            <p className="mt-6 text-lg text-gray-600">
              I'm a passionate and creative Software Engineer with a strong
              interest in open-source technologies. I love building scalable
              applications and solving complex problems.
            </p>
            <div className="mt-8 flex justify-center lg:justify-start flex-wrap items-center gap-4">
              <Button
                variant="outline"
                className="border border-primary flex items-center"
              >
                <BiDownload className="text-xl" />
                <span className="ml-2.5">Download CV</span>
              </Button>
            </div>
          </div>
          {/* Left side */}
          <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6 hidden lg:block">
            <BackgroundDesign className="absolute left-1/2 top-4 h-[600px] w-[600px] -translate-x-1/3 stroke-gray-300/70 sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
            <div className="-mx-4 px-9 sm:mx-0 lg:absolute lg:-inset-x-10 lg:-bottom-20 lg:-top-10 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32">
              <div className="max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] mx-auto">
                <img
                  src="/mee.jpg"
                  alt="hero"
                  className="rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
