import React from "react";

function DefaultSkeleton() {
  return (
    <div className="w-full max-md:mt-4">
      <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
      <div className="h-2 bg-gray-200 rounded-full max-w-[480px] mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full max-w-[440px] mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full max-w-[460px] mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full max-w-[360px]"></div>
    </div>
  );
}

export default DefaultSkeleton;
