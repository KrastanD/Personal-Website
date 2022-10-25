import React from "react";
import linkedin from "../assets/LI-In-Bug.png";

const LinkedInButton = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <a href={href} target="_blank">
      <div className="flex flex-row bg-[white] text-[#0177B5] text-[11px] font-semibold h-fit px-[5px] py-[2px] rounded-sm">
        <img src={linkedin} className="h-4" alt="Linkedin logo" />
        <p>{children}</p>
      </div>
    </a>
  );
};

export default LinkedInButton;
