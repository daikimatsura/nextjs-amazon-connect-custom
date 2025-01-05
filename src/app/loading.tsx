import React from "react";

const LoadingScreen = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500"></div>
      <p className="text-lg text-blue-700 mt-4">読み込み中...</p>
    </div>
  );
};

export default LoadingScreen;
