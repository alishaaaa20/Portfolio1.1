"use client";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { Tab } from "@headlessui/react";
import { useDebouncedCallback } from "use-debounce";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { features } from "./FrameView";
import CircleBackground from "./CircleBackground";
import PhoneFrame from "./PhoneFrame";

const usePrevious = (value) => {
  let ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
};

const DesktopFeature = () => {
  let [changeCount, setChangeCount] = useState(0);
  let [selectedIndex, setSelectedIndex] = useState(0);
  let prevIndex = usePrevious(selectedIndex);
  let isForwards = prevIndex === undefined ? true : selectedIndex > prevIndex;

  let onChange = useDebouncedCallback(
    (selectedIndex) => {
      setSelectedIndex(selectedIndex);
      setChangeCount((changeCount) => changeCount + 1);
    },
    100,
    { leading: true }
  );

  return (
    <Tab.Group
      as="div"
      className="grid grid-cols-12 items-center gap-8 lg:gap-16 xl:gap-24 px-6"
      selectedIndex={selectedIndex}
      onChange={onChange}
      vertical
    >
      <Tab.List className="relative z-10 order-last col-span-6 space-y-6 ">
        {features.map((feature, featureIndex) => (
          <div
            key={feature.name}
            className={clsx(
              "relative rounded-2xl transition-colors hover:bg-primary/40 border transition-transform transform hover:-translate-y-2 hover:scale-105 duration-300 relative ",
              featureIndex === selectedIndex
                ? "bg-gray-800 text-white"
                : "bg-transparent"
            )}
          >
            {featureIndex === selectedIndex && (
              <motion.div
                layoutId="activeBackground"
                className="absolute inset-0 bg-gray-800"
                initial={{ borderRadius: 16 }}
              />
            )}
            <div className="relative z-10 p-8">
              <feature.icon
                className={clsx(
                  "h-10 w-10",
                  featureIndex === selectedIndex
                    ? "text-primary"
                    : "text-primary"
                )}
              />
              <h3 className="mt-6 text-xl font-semibold">
                <Tab className="text-left [&:not(:focus-visible)]:focus:outline-none outline-none">
                  <span className="absolute inset-0 rounded-2xl" />
                  {feature.name}
                </Tab>
              </h3>
              <p
                className={clsx(
                  "mt-2 text-md",
                  featureIndex === selectedIndex
                    ? "text-gray-300"
                    : "text-gray-600"
                )}
              >
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </Tab.List>
      <div className="relative col-span-6">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <CircleBackground color="#2563eb" className="animate-spin-slower" />
        </div>
        <PhoneFrame className="z-10 mx-auto w-full max-w-[366px]">
          <Tab.Panels as={Fragment}>
            <AnimatePresence
              initial={false}
              custom={{ isForwards, changeCount }}
            >
              {features.map((feature, featureIndex) =>
                selectedIndex === featureIndex ? (
                  <Tab.Panel
                    static
                    key={feature.name + changeCount}
                    className="col-start-1 row-start-1 flex focus:outline-offset-[32px] [&:not(:focus-visible)]:focus:outline-none"
                  >
                    <feature.screen
                      animated
                      custom={{ isForwards, changeCount }}
                    />
                  </Tab.Panel>
                ) : null
              )}
            </AnimatePresence>
          </Tab.Panels>
        </PhoneFrame>
      </div>
    </Tab.Group>
  );
};

export default DesktopFeature;

export const FeatureMobile = () => {
  let [activeIndex, setActiveIndex] = useState(0);
  let slideContainerRef = useRef();
  let slideRefs = useRef([]);
  useEffect(() => {
    let observer = new window.IntersectionObserver(
      (entries) => {
        for (let entry of entries) {
          if (entry.isIntersecting) {
            setActiveIndex(slideRefs.current.indexOf(entry.target));
            break;
          }
        }
      },
      {
        root: slideContainerRef.current,
        threshold: 0.6,
      }
    );

    for (let slide of slideRefs.current) {
      if (slide) {
        observer.observe(slide);
      }
    }

    return () => {
      observer.disconnect();
    };
  }, [slideContainerRef, slideRefs]);

  return (
    <div className="h-auto">
      <div
        ref={slideContainerRef}
        className="-mb-4 flex snap-x snap-mandatory -space-x-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-4 [scrollbar-width:none] sm:-space-x-6 [&::-webkit-scrollbar]:hidden"
      >
        {features.map((feature, featureIndex) => (
          <div
            key={featureIndex}
            ref={(ref) => (slideRefs.current[featureIndex] = ref)}
            className="w-full flex-none snap-center px-4 sm:px-6"
          >
            <div className="relative transform overflow-hidden rounded-2xl  px-5 py-6">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <CircleBackground
                  color="#2563eb"
                  className="animate-spin-slower"
                />
              </div>
              <PhoneFrame className="relative mx-auto w-full max-w-[366px]">
                <feature.screen />
              </PhoneFrame>
              <div className="absolute inset-x-0 bottom-0 bg-primary/40 p-4 backdrop-blur sm:p-10">
                <feature.icon className=" text-gray-800 w-10 h-10" />
                <h3 className="mt-2 text-lg font-semibold text-black sm:text-lg">
                  {feature.name}
                </h3>
                <p className="mt-2 text-md text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center gap-3">
        {features.map((_, featureIndex) => (
          <button
            type="button"
            key={featureIndex}
            className={clsx(
              "relative h-1 w-6 rounded-full",
              featureIndex === activeIndex ? "bg-gray-300" : "bg-gray-500"
            )}
            aria-label={`Go to slide ${featureIndex + 1}`}
            onClick={() => {
              slideRefs.current[featureIndex].scrollIntoView({
                block: "nearest",
                inline: "nearest",
              });
            }}
          >
            <span className="absolute -inset-x-1.5 -inset-y-3" />
          </button>
        ))}
      </div>
    </div>
  );
};
