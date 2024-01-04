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
    <a href={href} target="_blank" rel="noreferrer">
      <div className="flex flex-row bg-[#1d2226] text-[#E9E9EA] text-[11px] font-semibold h-fit px-[5px] py-[2px] rounded-sm hover:scale-105">
        <img src={linkedin} className="h-4 mr-0.5" alt="Linkedin logo" />
        <p>{children}</p>
      </div>
    </a>
  );
};

export default LinkedInButton;
