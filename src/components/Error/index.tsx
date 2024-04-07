import React from "react";

const Error: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div className="bg-red-200 text-red-600 border border-red-600 p-4 rounded-md w-full text-center my-6">
      {message
        ? message
        : "An error occurred while fetching data. \n\n Please try again later."}
    </div>
  );
};

export default Error;
