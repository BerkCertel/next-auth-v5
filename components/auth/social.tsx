"use client";

import React from "react";
import { Button } from "../ui/button";
import { FaGithub, FaGoogle } from "react-icons/fa";

function Social() {
  return (
    <div className="flex items-center justify-center  gap-5  w-full">
      <Button
        size={"icon"}
        className="w-full "
        variant={"google"}
        onClick={() => {}}
      >
        <FaGoogle />
      </Button>
      <Button
        size={"icon"}
        className="w-full"
        variant={"github"}
        onClick={() => {}}
      >
        <FaGithub />
      </Button>
    </div>
  );
}

export default Social;
