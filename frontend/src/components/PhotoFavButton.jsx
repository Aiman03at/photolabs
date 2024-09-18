import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {


  
    
    const handleClick = () => {
      setIsSelected(prevIsSelected => !prevIsSelected) // Toggle the selection state
      setShowAlert(false); // Dismiss the alert once clicked (optional behavior)
    };

  
  
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={props.onClick} >
      <FavIcon selected={props.isFavorited}  />
      </div>
    </div>
  );
}

export default PhotoFavButton;