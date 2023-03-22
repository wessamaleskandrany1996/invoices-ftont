import React from "react";
import Section from "./Section";
import SideBar from "./SideBar";
const Home = () => {
  return (
    <div className=" grid grid-cols-12">
      <SideBar />
      <Section />
    </div>
  );
};

export default Home;
