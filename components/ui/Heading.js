import React, { useRef, useLayoutEffect, useState } from "react";
import useResizeObserver from "use-resize-observer";

const Heading = ({ headingContent }) => {
  const { ref, width } = useResizeObserver();

  return (
    <div className="relative hidden md:block">
      <div
        className="absolute bg-primary h-[2px] w-[21px] top-[10px]  -rotate-[45deg] skew-x-[45deg]"
        style={{ left: `${width * 0.45}px` }}
      ></div>
      <h2
        ref={ref}
        className="relative 
                    font-bold
                    md:text-[1.30rem] text-[1rem]
                    leading-[1.75rem] 
                    mt-4 mb-8
                    text-white
                    md:mb-0"
      >
        {headingContent}
      </h2>
      <div
        className="absolute bg-primary h-[2px] w-[21px] top-[47px] left-[40%] -rotate-[45deg] skew-x-[45deg]"
        style={{ left: `${width * 0.3}px` }}
      ></div>
    </div>
  );
};

export default Heading;
