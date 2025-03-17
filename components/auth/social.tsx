import React from "react";
import { Button } from "../ui/button";
import { FaGoogle } from "react-icons/fa";

function Social() {
  return (
    <div className="flex items-center justify-center  gap-3  w-full">
      <Button size={"icon"} className="w-full" variant={"outline"}>
        <FaGoogle></FaGoogle>
      </Button>
    </div>
  );
}

export default Social;
