import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";
import photos from "mocks/photos";


  

const PhotoList = (props) => {
  const sampleDataForPhotoList = props.photos;
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
