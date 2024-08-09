import React, { useEffect, useState } from "react";

const Six = () => {
  const [user, setuser] = useState(null);
  useEffect( () => {
    // const res = await fetch("https://jsonplaceholder.typicode.com/users");
    // // console.log(res);
    // const data = await res.json();

    fetch(" https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
         return setuser(data);
      });
    console.log(user);
  },[]);
  return (
    <div>
      {user ? (
        <div>
          <h1>{user.title}</h1>
          <h1>{user.body}</h1>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Six;
