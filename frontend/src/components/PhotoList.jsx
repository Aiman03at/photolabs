import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";



  

const PhotoList = (props) => {
  
  return (
    <ul className="photo-list">
      {props.photos.map((photo,index) => (
        
        <PhotoListItem
          key= {index}  
          photo = {photo}  
          favoritePhotos={props.favoritePhotos}
          toggleFavorite={props.toggleFavorite}
          openModal={props.openModal}
          
        />
      ))}
    </ul>
  );
};

export default PhotoList;
