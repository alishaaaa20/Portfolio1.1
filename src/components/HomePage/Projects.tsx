import React from "react";
import Container from "../Container";
import Title from "../Title";
import {
  DeviceArrowIcon,
  DeviceCardsIcon,
  DeviceClockIcon,
  DeviceListIcon,
  DeviceLockIcon,
  DeviceChartIcon,
} from "@/components/StockLogos";
import { GiLipstick, GiGraduateCap, GiCondorEmblem } from "react-icons/gi";
import {
  MdMovieFilter,
  MdOutlineCloudQueue,
  MdLocalCafe,
} from "react-icons/md";

const accountData = [
  {
    name: "Effortless Beauty",
    description:
      "A beauty website that allows users to  book appointments with beauty professionals and for beauty professionals to get more clients.",
    icon: GiLipstick,
  },
  {
    name: "CareerEase",
    description:
      "A platform designed to help 12th grade passed-out students navigate the diverse world of careers on their journey.",
    icon: GiGraduateCap,
  },
  {
    name: "Movie Booking Website",
    description:
      "An application is designed and implemented as a simple movie ticket booking application using Node.js  and React Js.",
    icon: MdMovieFilter,
  },
  {
    name: "MSP About Page",
    description:
      "This was an assignment I was tasked with, to redesign a webpage as part of the application process for the internship I was seeking.",
    icon: GiCondorEmblem,
  },
  {
    name: "Weather App",
    description:
      "A web-based tool built to provide users with real-time weather information for cities around the world. .",
    icon: MdOutlineCloudQueue,
  },
  {
    name: "Tea Cafe",
    description:
      "This is a website dedicated to a tea cafe, allowing users to view the menu and learn more about the cafe.",
    icon: MdLocalCafe,
  },
];
const Projects = () => {
  return (
    <section>
      <Container
        id="projects"
        aria-label="Features for building a portfolio"
        className="py-20 sm:py-32"
      >
        <div className=" mx-auto max-w-2xl sm:text-center">
          <Title title="My Projects" className="text-2xl" />
          <p className="mt-2 text-lg text-gray-600">
            I have been working on a few projects that I am excited to share
            with you. Here are some of the features that I have been working on.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
        >
          {accountData.map((item) => (
            <li
              key={item.name}
              className="rounded-2xl border border-gray-200 hover:border-gray-300 p-8 group hover:bg-gray-100 duration-300 cursor-pointer"
            >
              <item.icon className="h-8 w-8" />
              <h3 className="mt-6 font-semibold text-gray-900 group-hover:text-black duration-300">
                {item.name}
              </h3>
              <p className="mt-2 text-gray-700 group-hover:text-black duration-300">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Projects;
