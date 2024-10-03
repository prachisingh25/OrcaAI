import React from "react";
import Left from "./Left";
import Middle from "./Middle";
import Right from "./Right";

const Home = () => {
  return (
    <div className="bg-white min-h-screen flex">
      <Left />
      <Middle />
      <Right />
    </div>
  );
};

export default Home;
