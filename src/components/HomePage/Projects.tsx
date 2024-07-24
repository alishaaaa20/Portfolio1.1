import React from "react";
import Container from "../Container";
import Title from "../Title";
import { GiLipstick, GiGraduateCap, GiCondorEmblem } from "react-icons/gi";
import {
  MdMovieFilter,
  MdOutlineCloudQueue,
  MdLocalCafe,
} from "react-icons/md";
import Link from "next/link";

const projectsData = [
  {
    name: "Effortless Beauty",
    description:
      "A beauty website that allows users to book appointments with beauty professionals and for beauty professionals to get more clients.",
    icon: GiLipstick,
    link: "https://github.com/alishaaaa20/Effortless_Beauty",
  },
  {
    name: "CareerEase",
    description:
      "A platform designed to help 12th grade passed-out students navigate the diverse world of careers on their journey.",
    icon: GiGraduateCap,
    link: "https://main--careerease.netlify.app/",
  },
  {
    name: "Clothing E-commerce",
    description:
      "An e-commerce website that allows users to view and purchase ladies clothing items with different categories.",
    icon: MdMovieFilter,
    link: "https://clothing-website-sandy.vercel.app/",
  },
  {
    name: "MSP About Page",
    description:
      "This was an assignment I was tasked with, to redesign a webpage as part of the application process for the internship I was seeking.",
    icon: GiCondorEmblem,
    link: "https://msp-aboutpage.vercel.app/",
  },
  {
    name: "Weather App",
    description:
      "A web-based tool built to provide users with real-time weather information for cities around the world.",
    icon: MdOutlineCloudQueue,
    link: "https://react-weatherappp.netlify.app/",
  },
  {
    name: "Tea Cafe",
    description:
      "This is a website dedicated to a tea cafe, allowing users to view the menu and learn more about the cafe.",
    icon: MdLocalCafe,
    link: "https://roaring-dodol-8b6be0.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section className=" py-20 sm:py-32">
      <Container
        id="projects"
        aria-label="Features for building a portfolio"
        className=""
      >
        <div className="mx-auto max-w-2xl text-center">
          <Title
            title="My Projects"
            className="text-4xl font-bold text-black"
          />
          <p className="mt-2 text-lg text-black">
            I have been working on a few projects that I am excited to share
            with you. Here are some of the features that I have been working on.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto  mt-10 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
        >
          {projectsData.map((item) => (
            <Link key={item.name} href={item.link} passHref legacyBehavior>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-white  hover:border-primary border border-primary p-8 group hover:bg-secondary transition duration-300 hover:shadow-lg transform hover:-translate-y-1"
              >
                <item.icon className="h-12 w-12 text-primary mx-auto" />
                <h3 className="mt-4 text-xl font-semibold text-gray-900 group-hover:text-black transition duration-300">
                  {item.name}
                </h3>
                <p className="mt-2 text-gray-700 group-hover:text-black transition duration-300">
                  {item.description}
                </p>
              </a>
            </Link>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Projects;
