import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";



  

const PhotoList = (props) => {
  if (!Array.isArray(props.photos)) {
    return <div>No photos available</div>;  // Handle the case where photos is not an array
  }
  
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
