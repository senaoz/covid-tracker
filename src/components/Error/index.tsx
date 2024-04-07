import React from "react";

const Error: React.FC<{ message: string }> = ({ message }) => {
  return (
    <>
      <button
        onClick={() => (window.location.href = "/")}
        className={"mb-6 bg-blue-50 p-2 rounded-md text-blue-600"}
      >
        {"<"} Return Home
      </button>
      <div className="bg-red-200 text-red-600 border border-red-600 p-4 rounded-md w-full text-center my-6">
        {message
          ? message
          : "An error occurred while fetching data. \n\n Please try again later."}
      </div>
    </>
  );
};

export default Error;
