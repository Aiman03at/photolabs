import React from 'react';
import PhotoList from 'components/PhotoList';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  console.log(`Props${props}`)
  return (
    <div className="photo-details-modal">
      <div>
      <button className="photo-details-modal__close-button" onClick={props.closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      </div>
      
      
        
        <img src={props.photo.urls.regular} alt="Photo detail" className='photo-details-modal__image' />
        

        <div className='photo-details-modal__header'>
          <img src={props.photo.user.profile} alt="Photo detail"  className='photo-details-modal__photographer-profile'/>
          
          
           <p>{props.photo.username}</p>
          
           

           
            <p>{props.photo.location.city}</p>,<p>{props.photo.location.country}</p>
           

        </div>

        <h4>Similar Photos</h4>

        <div className='photo-details-modal__images'>
        <PhotoList photos={props.photos} 
      favoritePhotos={props.favoritePhotos}
      toggleFavorite={props.toggleFavorite}
      />
        </div>
      </div>
      
        
          
        
      
    
  )
};

export default PhotoDetailsModal;
