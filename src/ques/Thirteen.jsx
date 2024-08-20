import React, { useState } from "react";

const Thirteen = () => {
  const [email, setEmail] = useState();
  const [passowrd, setpassowrd] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoggedIn, setisLoggedIn] = useState(false);
  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>Welcome back</h1> <button>Logout</button>
        </div>
      ) : (
        <div>
          <form action="">
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setpassowrd(e.target.value)}
            />
            <button>{isRegistered ? "Login" : "registered"}</button>
          </form>
          <p>
            {isRegistered
              ? "Don't have an account! Register Now"
              : "Already have an account!Login"}
          </p>
          <button
            onClick={(e) => {
              setIsRegistered(!isRegistered);
            }}
          >
            {isRegistered ? "Register" : "Login"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Thirteen;
