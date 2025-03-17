import React from "react";
import { MdError } from "react-icons/md";

interface ErrorFormProps {
  message?: string;
}

function ErrorForm({ message }: ErrorFormProps) {
  if (!message) {
    return null;
  }

  return (
    <div className="bg-red-600 rounded-xl p-3 text-center flex justify-center items-center  text-white gap-1 text-lg capitalize my-1">
      <MdError size={23} />
      {message}
    </div>
  );
}

export default ErrorForm;
