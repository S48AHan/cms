import React from "react";

interface Props {
  msg: string;
  getAdjective: () => string;
}

const Callback = ({ msg, getAdjective }: Props) => {
  
  return (
    <>
      <div> {msg}</div>
      <button className="bg-slate-400" onClick={()=>{getAdjective()}}>{getAdjective()}</button>
    </>
  );
};

export default Callback;
