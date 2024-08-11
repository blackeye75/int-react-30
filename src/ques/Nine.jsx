import React, { useState } from "react";

const Nine = () => {
  const [bcg, setBcg] = useState("black");
const handleClick=()=>{
    setBcg(bcg==="black"?"red":"black")
}
  return (
    <div
      onClick={handleClick}
      style={{
        backgroundColor: bcg,
        width: "200px",
        height: "200px",
        cursor: "pointer",
        color: `${bcg === "black" ? "red" : ""}`,
      }}
    >
      Click me
    </div>
  );
};

export default Nine;
