import { useId } from "react";
import AppScreen from "@/components/AppScreen";
import { motion } from "framer-motion";
import {
  FaCode,
  FaServer,
  FaToolbox,
  FaPaintBrush,
  FaUserFriends,
  FaCloud,
  FaGraduationCap,
} from "react-icons/fa";
import { BiAward, BiBriefcase } from "react-icons/bi";

const MotionAppScreenHeader = motion(AppScreen.Header);
const MotionAppScreenBody = motion(AppScreen.Body);

const headerAnimation = {
  initial: { opacity: 0, transition: { duration: 0.3 } },
  animate: { opacity: 1, transition: { duration: 0.3, delay: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};
const maxZIndex = 2147483647;

const bodyVariantBackwards = {
  opacity: 0.4,
  scale: 0.8,
  zIndex: 0,
  filter: "blur(4px)",
  zIndex: 0,
  transition: { duration: 0.4 },
};

const bodyVariantForwards = (custom) => ({
  y: "100%",
  zIndex: maxZIndex - custom.changeCount,
  transition: { duration: 0.4 },
});
const bodyAnimation = {
  initial: "initial",
  animate: "animate",
  exit: "exit",
  variants: {
    initial: (custom) =>
      custom.isForwards ? bodyVariantForwards(custom) : bodyVariantBackwards,
    animate: (custom) => ({
      y: "0%",
      opacity: 1,
      scale: 1,
      zIndex: maxZIndex / 2 - custom.changeCount,
      filter: "blur(0px)",
      transition: { duration: 0.4 },
    }),
    exit: (custom) =>
      custom.isForwards ? bodyVariantBackwards : bodyVariantForwards(custom),
  },
};

function DeviceUserIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 23a3 3 0 100-6 3 3 0 000 6zm-1 2a4 4 0 00-4 4v1a2 2 0 002 2h6a2 2 0 002-2v-1a4 4 0 00-4-4h-2z"
        fill="#737373"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4a4 4 0 014-4h14a4 4 0 014 4v24a4.002 4.002 0 01-3.01 3.877c-.535.136-.99-.325-.99-.877s.474-.98.959-1.244A2 2 0 0025 28V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 001.041 1.756C8.525 30.02 9 30.448 9 31s-.455 1.013-.99.877A4.002 4.002 0 015 28V4z"
        fill="#A3A3A3"
      />
    </svg>
  );
}

function DeviceNotificationIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
        fill="#A3A3A3"
      />
      <path
        d="M9 8a2 2 0 012-2h10a2 2 0 012 2v2a2 2 0 01-2 2H11a2 2 0 01-2-2V8z"
        fill="#737373"
      />
    </svg>
  );
}

function DeviceTouchIcon(props) {
  let id = useId();

  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <defs>
        <linearGradient
          id={`${id}-gradient`}
          x1={14}
          y1={14.5}
          x2={7}
          y2={17}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#737373" />
          <stop offset={1} stopColor="#D4D4D4" stopOpacity={0} />
        </linearGradient>
      </defs>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4a4 4 0 014-4h14a4 4 0 014 4v13h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 002 2h4v2H9a4 4 0 01-4-4V4z"
        fill="#A3A3A3"
      />
      <path
        d="M7 22c0-4.694 3.5-8 8-8"
        stroke={`url(#${id}-gradient)`}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 20l.217-5.513a1.431 1.431 0 00-2.85-.226L17.5 21.5l-1.51-1.51a2.107 2.107 0 00-2.98 0 .024.024 0 00-.005.024l3.083 9.25A4 4 0 0019.883 32H25a4 4 0 004-4v-5a3 3 0 00-3-3h-5z"
        fill="#A3A3A3"
      />
    </svg>
  );
}

function EducationScreen({ custom, animated = false }) {
  return (
    <AppScreen className="w-full">
      <MotionAppScreenHeader {...(animated ? headerAnimation : {})}>
        <AppScreen.Title>My Education</AppScreen.Title>
      </MotionAppScreenHeader>
      <MotionAppScreenBody {...(animated ? { ...bodyAnimation, custom } : {})}>
        <div className="px-4 py-6">
          <div className="space-y-6">
            {[
              {
                label:
                  "Bachelor of Engineering in Information Technology (BE IT)",
                value: "Nepal College of Information Technology ",
                date: "2019-2024",
              },
              {
                label: "+2-Science (NEB) ",
                value: "Kathmandu Model Secondary School (KMC) ",
                date: "2017-2019",
              },
              {
                label: "SEE ",
                value: "Nawa Pravat School ",
                date: "2016",
              },
            ].map((field) => (
              <div key={field.label}>
                <div className="text-sm text-gray-900">{field.label}</div>
                <div className="mt-2 text-sm text-gray-500">{field.value}</div>
                <div className="border-b border-gray-200 mt-2  pb-2 text-sm text-gray-500">
                  {field.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  );
}
function SkillsScreen({ custom, animated = false }) {
  return (
    <AppScreen className="w-full">
      <MotionAppScreenHeader {...(animated ? headerAnimation : {})}>
        <AppScreen.Title>Skills</AppScreen.Title>
      </MotionAppScreenHeader>
      <MotionAppScreenBody {...(animated ? { ...bodyAnimation, custom } : {})}>
        <div className="divide-y divide-gray-100 flex flex-col gap-4">
          {[
            {
              title: "Frontend Development",
              name: "JavaScript, React, Next.js, TypeScript",
              icon: <FaCode />,
            },
            {
              title: "Backend Development",
              name: "Node.js, Express, MongoDB",
              icon: <FaServer />,
            },
            {
              title: "Tools & Technologies",
              name: "Git, npm, VS Code, Postman",
              icon: <FaToolbox />,
            },
            {
              title: "Design",
              name: "Figma, Responsive Design",
              icon: <FaPaintBrush />,
            },
            {
              title: "Soft Skills",
              name: "Problem-Solving, Team Collaboration, Agile Methodologies, Time Management",
              icon: <FaUserFriends />,
            },
            {
              title: "Hosting & Deployment",
              name: "Vercel, Netlify,  AWS",
              icon: <FaCloud />,
            },
          ].map((skill) => (
            <div key={skill.name} className="py-2">
              <div className="flex items-center ">
                <div className="text-xl text-gray-600 px-4">{skill.icon}</div>
                <div className="text-sm font-semibold text-gray-800">
                  {skill.title}
                </div>
              </div>
              <div className="text-sm font-medium text-gray-600 mt-2 ml-10">
                {skill.name}
              </div>
            </div>
          ))}
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  );
}

function WorkExperienceScreen({ custom, animated = false }) {
  return (
    <AppScreen className="w-full">
      <MotionAppScreenHeader {...(animated ? headerAnimation : {})}>
        <AppScreen.Title>Work Experience</AppScreen.Title>
      </MotionAppScreenHeader>
      <MotionAppScreenBody {...(animated ? { ...bodyAnimation, custom } : {})}>
        <div className="px-4 py-6">
          <div className="space-y-4">
            {[
                {
                label: "Frontend Engineer",
                value: "Full-time",
                company: "Nepware Pvt. Ltd.",
                date: "August 2024 - Present",
              },
              {
                label: "Frontend Engineer",
                value: "Intern (3 months)",
                company: "Metalogic Software Pvt. Ltd.",
                date: "April 2024 - July 2024",
              },
              {
                label: "Web Development",
                value: "Intern (1 month)",
                company: "CodSoft",
                date: "December 2023",
              },
              {
                label: "Graphic Design",
                value: "Volunteer",
                company: "HULT Prize at PU",
                date: "December 2021 - March 2022",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col border-b border-gray-100 pb-4"
              >
                <div className="flex justify-between items-center">
                  <div className="text-sm font-semibold text-gray-900">
                    {item.label}
                  </div>
                  <div className="text-sm text-gray-500">{item.value}</div>
                </div>
                <div className="text-sm text-gray-500">{item.company}</div>
                <div className="text-sm text-gray-500">{item.date}</div>
              </div>
            ))}
          </div>
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  );
}

export const features = [
  {
    name: "Education",
    description: "I studied Bachelor of Engineering in Information Technology.",
    icon: FaGraduationCap,
    screen: EducationScreen,
  },
  {
    name: "Skills",
    description:
      "I have experience in web development, frontend development, fullstack and graphic design.",
    icon: BiAward,
    screen: SkillsScreen,
  },
  {
    name: "Work Experience",
    description:
      "I have worked as a frontend engineer, web developer, and graphic designer.",
    icon: BiBriefcase,
    screen: WorkExperienceScreen,
  },
];
