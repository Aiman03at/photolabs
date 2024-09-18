import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist }) => {
  return (
    <div className='fav-badge'>
      {isFavPhotoExist && <FavIcon displayAlert={!!isFavPhotoExist} selected={true}/>}
      {isFavPhotoExist && <span className="fav-badge__notification">Favourite Exist!!!!!</span>}
    </div>
  ) 
};

export default FavBadge;