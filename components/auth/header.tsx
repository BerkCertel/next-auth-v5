import React from "react";
import { FaUnlockAlt } from "react-icons/fa";

interface HeaderProps {
  label: string;
}

function Header({ label }: HeaderProps) {
  return (
    <div className="w-full flex flex-col gap-4 items-center justify-center">
      <h1 className="flex h-f text-slate-600 items-center justify-center font-semibold text-7xl gap-4">
        <FaUnlockAlt />
        {label}
      </h1>
      <p className="text-lg mt-8"> {label}</p>
    </div>
  );
}

export default Header;
