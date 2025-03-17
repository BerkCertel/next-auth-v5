import React from "react";
import { IconType } from "react-icons/lib";

interface HeaderProps {
  label: string;
  title: string;
  icon: IconType;
}

function Header({ label, title, icon }: HeaderProps) {
  return (
    <div className="w-full flex flex-col gap-4 items-center justify-center">
      <h1 className="flex h-full text-slate-600 items-center justify-center font-semibold text-7xl gap-4">
        {React.createElement(icon)}
        {title}
      </h1>
      <p className="text-lg mt-8"> {label}</p>
    </div>
  );
}

export default Header;
