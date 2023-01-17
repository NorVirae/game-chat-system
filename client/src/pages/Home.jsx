import React from "react";
import PostSide from "../components/PostSide/PostSide";
import ProfileSide from "../components/profileSide/ProfileSide";
import RightSide from "../components/RightSide/RightSide";
import "./Home.css";
const Home = () => {
  return (
    <div className="Home">
      <RightSide />

      <ProfileSide/>
      {/* <PostSide /> */}
    </div>
  );
};

export default Home;
