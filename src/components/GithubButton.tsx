import React from "react";
import github from "../assets/GitHub-Logo.png";

const GithubButton = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <div className="flex flex-row bg-[#1d2226] text-[#E9E9EA] text-[11px] font-semibold h-fit px-[5px] py-[2px] rounded-sm">
        <img src={github} className="h-4 mr-1" alt="Github logo" />
        <p>{children}</p>
      </div>
    </a>
  );
};

export default GithubButton;
