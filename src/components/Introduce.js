import React from "react";

import myPic from "../images/Introduce/myPic.png";
import ColoredHome from "../images/Menu/Colored/ColoredHome.png";
import DoubleCheck from "../images/Introduce/DoubleCheck.svg";
import Hire from "../images/Menu/Share/Telegram.png";

export default function Introduce() {
  return (
    <section id="Home" className="scroll-mt-4 w-full bg-nightBlack rounded-2xl p-12 flex flex-col">
      <div className="border border-metalBlack rounded-full flex items-center gap-x-2 px-5 py-2 w-fit">
        <img className="w-4 h-4" src={ColoredHome} alt="Introduce" />
        <span className="text-snowWhite uppercase text-xs font-medium">
          Introduce
        </span>
      </div>

      <div className="w-full flex flex-row items-end justify-between">
        <div className="flex flex-col gap-y-7">
          <span className="text-snowWhite font-semibold capitalize flex flex-col gap-y-3 text-5xl">
            I build <span className="text-themeColor">the best ones</span>
          </span>

          <span className="text-colorGray leading-[30px]">
            I am a <span className="text-snowWhite">Frontend Developer</span> at
            heart and, i create features that are best suited for the job at
            hand.
          </span>

          <div className="flex items-center gap-x-5 font-light">
            <div className="flex items-center gap-x-1">
              <img className="w-5 h-5" src={DoubleCheck} alt="DoubleCheck" />
              <span className="text-colorGray">Available for projects</span>
            </div>
            <div className="flex items-center gap-x-1">
              <img className="w-5 h-5" src={DoubleCheck} alt="DoubleCheck" />
              <span className="text-colorGray">Part Time Job</span>
            </div>
          </div>

          <button className="w-fit px-7 py-4 rounded-full text-snowWhite font-semibold transition-all duration-200 bg-themeColor hover:shadow-lg hover:shadow-themeHoverColor/30 flex items-center gap-x-2">
            <img className="w-6 h-6" src={Hire} alt="Hire" />
            <span className="uppercase">hire me</span>
          </button>
        </div>

        <img
          className="w-[25.5rem] h-[25.5rem] -mr-[60px]"
          src={myPic}
          alt="Me"
        />
      </div>
    </section>
  );
}
