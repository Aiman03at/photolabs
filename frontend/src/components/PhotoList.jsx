import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";



  

const PhotoList = (props) => {
  
  return (
    <ul className="photo-list">
      {props.photos.map((photo,index) => (
        
        <PhotoListItem
          key= {index}  
          sampleDataForPhotoListItem = {photo}  
          favoritePhotos={props.favoritePhotos}
          toggleFavorite={props.toggleFavorite}
          
        />
      ))}
    </ul>
  );
};

export default PhotoList;
