import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

function layout({ children }: AuthLayoutProps) {
  return (
    <div className="flex h-full flex-col items-center justify-center  bg-gradient-to-bl from-violet-500 to-fuchsia-500">
      {children}
    </div>
  );
}

export default layout;
