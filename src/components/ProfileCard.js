import React from "react";
import Subtract from "../images/Subtract.png";
import profile from "../images/profile.png";
import download from "../images/download.png";
import { TypeAnimation } from "react-type-animation";

export default function ProfileCard() {
  const typingAnimtionDuration = 1500;

  return (
    <div className="bg-nightBlack w-[20rem] rounded-2xl flex flex-col justify-between items-center">
      <div className="w-full -mt-[1px]">
        <img className="ml-auto w-10/12" src={Subtract} />
      </div>
      <div className="w-full flex justify-center">
        <div className="flex flex-col gap-y-2 items-center mt-1">
          <img
            className="w-32 h-32 border-[6px] rounded-full border-[#2f2f2f]"
            src={profile}
          />
          <div className="flex flex-col gap-y-1 items-center">
            <span className="text-snowWhite font-semibold text-lg">
              Alireza Nasiri
            </span>
            <TypeAnimation
              sequence={[
                "UI/UX Designer", // Types 'One'
                typingAnimtionDuration, // Waits 1s
                "Front-End Developer", // Deletes 'One' and types 'Two'
                typingAnimtionDuration, // Waits 2s
                "Back-End Developer", // Types 'Three' without deleting 'Two'
                typingAnimtionDuration,
                () => {
                  console.log("Sequence completed");
                },
              ]}
              speed={60}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className="text-themeColor text-sm"
            />
          </div>
        </div>
      </div>
      <div className="w-full px-9">
        <div className="mx-auto border-t border-metalBlack my-5 pt-6 pb-2 flex flex-col gap-y-3">
          <div className="w-full flex justify-between">
            <span className="text-snowWhite font-medium text-sm">
              Residance:
            </span>
            <span className="text-colorGray text-sm">Iran</span>
          </div>
          <div className="w-full flex justify-between">
            <span className="text-snowWhite font-medium text-sm">City:</span>
            <span className="text-colorGray text-sm">Mashhad</span>
          </div>
          <div className="w-full flex justify-between">
            <span className="text-snowWhite font-medium text-sm">Age:</span>
            <span className="text-colorGray text-sm">21</span>
          </div>
        </div>
      </div>
      <div className="w-full px-3 pb-3">
        <div className="bg-metalBlack flex flex-col gap-y-4 p-5 rounded-xl">
          <span className="text-snowWhite text-sm font-medium">Skills</span>
          <div className="w-full flex justify-between items-center">
            <div className="flex flex-col items-center gap-y-2">
              <div className="rounded-full border-2 border-themeColor flex justify-center items-center w-12 h-12">
                <span className="text-sm text-colorGray">90%</span>
              </div>
              <span className="text-snowWhite text-sm">HTML</span>
            </div>
            <div className="flex flex-col items-center gap-y-2">
              <div className="rounded-full border-2 border-themeColor flex justify-center items-center w-12 h-12">
                <span className="text-sm text-colorGray">60%</span>
              </div>
              <span className="text-snowWhite text-sm">CSS</span>
            </div>
            <div className="flex flex-col items-center gap-y-2">
              <div className="rounded-full border-2 border-themeColor flex justify-center items-center w-12 h-12">
                <span className="text-sm text-colorGray">80%</span>
              </div>
              <span className="text-snowWhite text-sm">JS</span>
            </div>
            <div className="flex flex-col items-center gap-y-2">
              <div className="rounded-full border-2 border-themeColor flex justify-center items-center w-12 h-12">
                <span className="text-sm text-colorGray">75%</span>
              </div>
              <span className="text-snowWhite text-sm">React</span>
            </div>
          </div>
          <button className="w-full py-3 flex justify-center items-center gap-x-1.5 transition-all duration-300 bg-themeColor hover:bg-themeHoverColor font-medium text-snowWhite rounded-full mt-2 mb-1">
            <span>DOWNLOAD CV</span>
            <img className="w-5 h-5 animate-bounce" src={download} />
          </button>
        </div>
      </div>
    </div>
  );
}
