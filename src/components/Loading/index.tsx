import React from "react";

const Loading: React.FC<{ loading?: boolean }> = ({ loading = true }) => {
  return loading ? (
    <div className="flex justify-center items-center min-h-[20vh]">
      <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-gray-900"></div>
    </div>
  ) : (
    <></>
  );
};

export default Loading;
