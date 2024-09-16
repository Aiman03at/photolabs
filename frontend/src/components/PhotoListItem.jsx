import React from "react";

import "../styles/PhotoListItem.scss";




const PhotoListItem = (props) => {
  return (
    <div>
      
      <section><img src={props.imageSource} alt="Description of image"  /></section>
      
      <img src={props.profile} alt="Description of image"  />
      
      <h4>{props.username}</h4>
      <h4>{props.location.city} ,{props.location.country}</h4>
      
      
    </div>
  );
};

export default PhotoListItem;
