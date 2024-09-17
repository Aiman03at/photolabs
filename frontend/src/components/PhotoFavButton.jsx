import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {


  
    const [isSelected, setIsSelected] = useState(false);
    const [showAlert, setShowAlert] = useState(true); // Example for displaying the alert
  
    const handleClick = () => {
      setIsSelected(prevIsSelected => !prevIsSelected) // Toggle the selection state
      setShowAlert(false); // Dismiss the alert once clicked (optional behavior)
    };

  
  
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={handleClick} >
      <FavIcon selected={isSelected} displayAlert={showAlert} />
      </div>
    </div>
  );
}

export default PhotoFavButton;