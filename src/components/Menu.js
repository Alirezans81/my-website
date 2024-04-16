import React, { useState } from "react";
import { Tooltip } from "react-tooltip";

import siteLogo from "../images/site-logo.svg";
import Share from "../images/Menu/Share.svg";

export default function Menu({ sections, shareLinks }) {
  const [activeLinkIndex, setActiveLinkIndex] = useState(-1);
  const [activeShareLinkIndex, setActiveShareIndex] = useState(-1);

  return (
    <div className="rounded-full border border-metalBlack px-2.5 pt-2.5 pb-6 flex flex-col items-center gap-y-10">
      <button className="rounded-full border border-metalBlack p-4">
        <img className="w-7 h-7" src={siteLogo} alt="Site Logo" />
      </button>
      <div className="flex flex-col gap-y-3">
        {sections.map((section, index) => (
          <div key={index}>
            <button
              className="p-2 rounded-full transition-all duration-200 hover:bg-metalBlack flex justify-center items-center"
              onMouseEnter={() => setActiveLinkIndex(index)}
              onMouseLeave={() => setActiveLinkIndex(-1)}
              data-tooltip-id={`${section.title}-tooltip`}
              data-tooltip-content={`${section.title}`}
              onClick={() => {
                const element = document.getElementById(`${section.title}`);
                if (element) {
                  // 👇 Will scroll smoothly to the top of the next section
                  element.scrollIntoView({
                    behavior: "smooth",
                  });
                }
              }}
            >
              <img
                className="w-5 h-5"
                src={
                  activeLinkIndex !== index ? section.icon : section.coloredIcon
                }
                alt={`${section.title}`}
              />
            </button>
            <Tooltip
              id={`${section.title}-tooltip`}
              place="left"
              style={{ backgroundColor: "#2d2e2f", borderRadius: 6 }}
            />
          </div>
        ))}
      </div>

      <button
        id="Share-tooltip"
        className="mt-2 p-2.5 rounded-full transition-all duration-200 hover:bg-metalBlack flex justify-center items-center border border-metalBlack"
      >
        <img className="w-5 h-5" src={Share} alt="Share" />
      </button>
      <Tooltip
        anchorSelect="#Share-tooltip"
        place="left"
        style={{ backgroundColor: "#2d2e2f", borderRadius: 50 }}
        clickable
      >
        <div className="flex items-center gap-x-2.5 py-1">
          {shareLinks.map((shareLink, index) => (
            <a
              onMouseEnter={() => setActiveShareIndex(index)}
              onMouseLeave={() => setActiveShareIndex(-1)}
              href={shareLink.link}
            >
              <img
                className="w-5 h-5"
                src={
                  activeShareLinkIndex !== index
                    ? shareLink.icon
                    : shareLink.coloredIcon
                }
                alt={shareLink.title}
              />
            </a>
          ))}
        </div>
      </Tooltip>
    </div>
  );
}
