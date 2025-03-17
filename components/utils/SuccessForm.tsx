import { FaCheckCircle } from "react-icons/fa";

import React from "react";

interface SuccessFormProps {
  message?: string;
}

function SuccessForm({ message }: SuccessFormProps) {
  if (!message) {
    return null;
  }

  return (
    <div className="bg-green-600 rounded-xl p-3 text-center flex justify-center items-center  text-white gap-1 text-lg capitalize my-1">
      <FaCheckCircle size={20} />
      {message}
    </div>
  );
}

export default SuccessForm;
