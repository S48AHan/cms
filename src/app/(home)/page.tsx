"use client";
import Callback from "@/components/Callback";
import React, { useCallback, useState } from "react";

const Home = () => {
  const [adjective, setAdjective] = useState<number>(0);

  const getAdjective = useCallback(
    ()=>{
        return "output "+adjective;
    },
    [],
  )

//   const getAdjective =()=>{
//     return "output "+adjective;
//     }
  
  return (
    <>
      <Callback msg={`important msg `} getAdjective={getAdjective} />
      <div className="w-full flex flex-row justify-center ">
        <button
          className="border-blue-500 w-10 bg-gray-300"
          onClick={() => {
            setAdjective((curr) => curr + 1);
          }}
        >
          {adjective}
        </button>
      </div>
      <div className="w-full mt-5 text-center">Home</div>
    </>
  );
};

export default Home;
