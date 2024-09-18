import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";
import photos from "mocks/photos";

const sampleDataForPhotoList = photos
  

const PhotoList = () => {
  return (
    <ul className="photo-list">
      {sampleDataForPhotoList.map((photo,index) => (
        
        <PhotoListItem
          key= {index}  
          sampleDataForPhotoListItem = {photo}  
          
        />
      ))}
    </ul>
  );
};

export default PhotoList;
