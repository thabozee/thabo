import React from "react";
import CallIcon from "@/components/images/call";
import LinkedinIcon from "@/components/images/linkedin";
import CompassIcon from "@/components/images/compass";

const Body = () => {
  return (
    <>
      <div className="flex content-center flex-col flex-wrap mb-5">
        <div className="text-lg font-bold underline">Work</div>
        <div className="w-4/5 text-base ml-11">
          <p>
            I like to code things from scratch, I enjoy building computational
            solutions. Responsive websites built for an optimal user experience
            that achieves business goals,Building Robust APIs using latest
            technologies.
          </p>
        </div>
      </div>

      <div className="flex content-center flex-col flex-wrap mb-5">
        <div className="text-lg font-bold underline">Bio</div>
        <div className="w-4/5 text-base ml-11">
          <div className="mb-2">19XX Born in Maseru, Makoanyane Hospital</div>
          <div className="mb-2">
            2015 Student at the National University of Lesotho, Studying B.SC.
            Computer Science
          </div>
          <div className="mb-2">
            2021 Graduate Trainee Software Engineer at Vodacom Lesotho
          </div>
          <div className="mb-2">2023 Still @Vodacom Lesotho</div>
        </div>
      </div>

      <div className="flex content-center flex-col flex-wrap mb-5">
        <div className="text-lg font-bold underline">I Love</div>
        <div className="w-4/5 text-base ml-11">
          <p>
            My wife❤️, My daughter, My family, Movies, Tech news,International
            Politics, everything tech, TypeScript, ReactJS, NextJS, TailwindCSS,
            NodeJS,DevOps, Cloud Computing, UI/UX Design, Automation using
            Uipath(c#) or Selenium(Python), Python...
          </p>
        </div>
      </div>

      <div className="flex content-center flex-col flex-wrap mb-5">
        <div className="text-lg font-bold underline">Contact</div>
        <div className="w-4/5 text-base ml-11">
          <div className="flex gap-2 items-center">
            <span className="text-2xl">
              <CallIcon height={24} width={24} />
            </span>
            <div className="q">
              <div className="1">(+266) 5996 6490</div>
              <div className="1">thabozee@gmail.com</div>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <span className="text-2xl">
              <CompassIcon height={24} width={24} />
            </span>
            <div className="q">
              <div className="1">Maseru</div>
              <div className="1">Lesotho</div>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <span className="text-2xl">
              <LinkedinIcon height={24} width={24} />
            </span>
            <div className="">www.linkedin.com/in/thabo-khabele-57b559135</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
