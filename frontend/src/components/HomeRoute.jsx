import React from "react";
import TopNavigation from "./TopNavigationBar";
import PhotoList from "./PhotoList";

const Homeroute = (props) => {
  return(<div className="home-route">
    <TopNavigation/>
    <PhotoList/>

  </div>)
}

export default Homeroute;