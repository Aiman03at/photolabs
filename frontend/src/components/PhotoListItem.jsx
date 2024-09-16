import React from "react";

import "../styles/PhotoListItem.scss";




const PhotoListItem = (props) => {
  return (
    
    <div className="photo-list__item">
      <img className="photo-list__image" src={props.sampleDataForPhotoListItem.imageSource} alt="Description of image" />
      
      
      
      <section className="photo-list__user-details">
      <img src={props.sampleDataForPhotoListItem.profile} alt="Description of image" className="photo-list__user-profile" />
      <p className="photo-list__user-info ">{props.sampleDataForPhotoListItem.username}</p> 
      <p className="photo-list__user-location">{props.sampleDataForPhotoListItem.location.city} ,{props.sampleDataForPhotoListItem.location.country}</p>
      </section>
      
    </div>
  );
};

export default PhotoListItem;
