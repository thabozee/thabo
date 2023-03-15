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
            I like to code things from scratch, and enjoy bringing ideas to life
            in the browser. Responsive websites built for an optimal user
            experience that achieves business goals. Make website fast, easy to
            find, and reach the widest audience possible.
          </p>
        </div>
      </div>

      <div className="flex content-center flex-col flex-wrap mb-5">
        <div className="text-lg font-bold underline">Bio</div>
        <div className="w-4/5 text-base ml-11">
          <div className="d">19XX Born in Maseru, Makoanyane Hospital</div>
          <div className="d">
            2015 Student at National University of Lesotho, Studying B.sc.
            Computer Science
          </div>
          <div className="d">
            2021 Graduate Trainee Software Engineer at Vodacom Lesotho
          </div>
          <div className="d">2023 Still @Vodacom Lesotho</div>
        </div>
      </div>

      <div className="flex content-center flex-col flex-wrap mb-5">
        <div className="text-lg font-bold underline">I Love</div>
        <div className="w-4/5 text-base ml-11">
          <p>
            My wife❤️, My daughter, My family, Movies, tech new, everything
            tech, ReactJS,Nextjs T3 stack,Tailwind CSS, NodeJS
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
