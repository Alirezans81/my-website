import { useState } from "react";
import Menu from "./components/Menu";
import ProfileCard from "./components/ProfileCard";
import Introduce from "./components/Introduce";

function App() {
  const [sections, setSections] = useState([
    {
      title: "Home",
      icon: require("./images/Menu/Home.png"),
      coloredIcon: require("./images/Menu/Colored/ColoredHome.png"),
      topOffset: 500,
    },
    {
      title: "About",
      icon: require("./images/Menu/About.png"),
      coloredIcon: require("./images/Menu/Colored/ColoredAbout.png"),
      topOffset: 600,
    },
    {
      title: "Service",
      icon: require("./images/Menu/Service.png"),
      coloredIcon: require("./images/Menu/Colored/ColoredService.png"),
      topOffset: 0,
    },
    {
      title: "Skills",
      icon: require("./images/Menu/Skills.png"),
      coloredIcon: require("./images/Menu/Colored/ColoredSkills.png"),
      topOffset: 0,
    },
    {
      title: "Resume",
      icon: require("./images/Menu/Resume.png"),
      coloredIcon: require("./images/Menu/Colored/ColoredResume.png"),
      topOffset: 0,
    },
    {
      title: "Contact",
      icon: require("./images/Menu/Contact.png"),
      coloredIcon: require("./images/Menu/Colored/ColoredContact.png"),
      topOffset: 0,
    },
  ]);
  const [shareLinks, setShareLinks] = useState([
    {
      title: "X",
      icon: require("./images/Menu/Share/X.png"),
      coloredIcon: require("./images/Menu/Share/Colored/X.png"),
      link: "http://google.com",
    },
    {
      title: "Instagram",
      icon: require("./images/Menu/Share/Instagram.png"),
      coloredIcon: require("./images/Menu/Share/Colored/Instagram.png"),
      link: "http://google.com",
    },
    {
      title: "Telegram",
      icon: require("./images/Menu/Share/Telegram.png"),
      coloredIcon: require("./images/Menu/Share/Colored/Telegram.png"),
      link: "http://google.com",
    },
    {
      title: "Linkdin",
      icon: require("./images/Menu/Share/Linkdin.png"),
      coloredIcon: require("./images/Menu/Share/Colored/Linkdin.png"),
      link: "http://google.com",
    },
  ]);

  return (
    <div className="w-[100vw] h-[100dvh] bg-power__black overflow-x-hidden relative">
      <div className="w-full px-[60px] h-full overflow-auto flex justify-between gap-x-3 overflow-y-auto">
        <div className=" w-[22.5rem]">
          <div className="absolute top-0 h-[100dvh] flex flex-col justify-center">
            <ProfileCard />
          </div>
        </div>
        <div className="py-14 flex-1 flex flex-col gap-y-5">
          <Introduce />
        </div>
        <div className="w-[6rem] flex justify-center">
          <div className="absolute top-0 h-[100dvh] flex flex-col justify-center items-center">
            <Menu sections={sections} shareLinks={shareLinks} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
