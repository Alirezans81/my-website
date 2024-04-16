import React, { useEffect, useState } from "react";
import subtract from "../images/subtract.svg";
import profile from "../images/profile.png";
import download from "../images/download.svg";
import { TypeAnimation } from "react-type-animation";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProgressProvider = ({ valueStart, valueEnd, children }) => {
  const [intervalId, setIntervalId] = useState();
  const [value, setValue] = React.useState(valueStart);

  useEffect(() => {
    setIntervalId(
      setInterval(() => {
        setValue((prev) => (prev + 1 <= valueEnd ? prev + 1 : prev));
      }, 6)
    );
  }, []);

  useEffect(() => {
    if (value >= valueEnd) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  }, [value]);

  return children(value);
};

export default function ProfileCard() {
  const typingAnimtionDuration = 1500;

  const [skills, setSkills] = useState([
    { title: "HTML", value: 90 },
    { title: "CSS", value: 80 },
    { title: "JS", value: 80 },
    { title: "REACT", value: 70 },
  ]);

  return (
    <div className="w-[22.5rem]">
      <div className="w-full">
        <img alt="subtract" className="mr-auto w-full" src={subtract} />
      </div>

      <div className="bg-nightBlack rounded-b-2xl flex flex-col justify-between items-center">
        <div className="flex justify-center">
          <div className="flex flex-col gap-y-2 items-center mt-1">
            <img
              alt="profile"
              className="w-36 h-36 border-[6px] rounded-full border-[#2f2f2f]"
              src={profile}
            />
            <div className="flex flex-col items-center">
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
                  () => {},
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

        <div className="w-full px-9 mt-2">
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
          <div className="bg-metalBlack flex flex-col gap-y-4 p-6 rounded-xl">
            <span className="text-snowWhite text-sm font-medium">Skills</span>
            <div className="w-full flex justify-between items-center">
              {skills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center gap-y-2">
                  <div className="rounded-full flex justify-center items-center w-12 h-12">
                    <ProgressProvider valueStart={0} valueEnd={skill.value}>
                      {(value) => (
                        <CircularProgressbar
                          value={value}
                          text={`${value}%`}
                          strokeWidth={3}
                          className="text-colorGray"
                          styles={{
                            path: {
                              transition: "linear 0.5s ease 0s",
                              // Rotate the path
                              transform: "rotate(0.25turn)",
                              transformOrigin: "center center",
                            },
                            ...buildStyles({
                              // Rotation of path and trail, in number of turns (0-1)
                              rotation: 0.25,

                              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                              strokeLinecap: "butt",

                              // Text size
                              textSize: "30px",

                              // How long animation takes to go from one percentage to another, in seconds
                              pathTransitionDuration: 0.5,

                              // Can specify path transition in more detail, or remove it entirely
                              // pathTransition: 'none',

                              // Colors
                              pathColor: "#00bc91",
                              textColor: "#999999",
                              trailColor: "#999999",
                              backgroundColor: "#fff",
                            }),
                          }}
                        />
                      )}
                    </ProgressProvider>
                  </div>
                  <span className="text-platinum text-sm font-light">
                    {skill.title}
                  </span>
                </div>
              ))}
            </div>
            <button className="py-3.5 flex justify-center items-center gap-x-1.5 transition-all duration-300 bg-themeColor hover:bg-themeHoverColor font-semibold text-snowWhite rounded-full mt-3 text-sm">
              <span>DOWNLOAD CV</span>
              <img
                alt="download"
                className="w-5 h-5 animate-bounce"
                src={download}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
