import React, { useState } from "react";

const Five = () => {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <div>
      <label htmlFor="">
        <input
          type="checkbox"
          name=""
          id=""
          onChange={() => {
            setIsToggled(!isToggled);
          }}
        />
      </label>
      <p>IsToggled : {isToggled ? "On" : "Off"}</p>
    </div>
  );
};

export default Five;
