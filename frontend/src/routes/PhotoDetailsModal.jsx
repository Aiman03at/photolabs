import React from 'react';
import PhotoList from 'components/PhotoList';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = (props) => {

  const isFavorited = props.favoritePhotos.some((favPhoto) => favPhoto.id === props.photo.id);

  return (
    <div className="photo-details-modal">
     
      <div>
      <button className="photo-details-modal__close-button" onClick={props.closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      </div>
      
      
      
      
      
        
        
        

        
      <div className='photo-details-modal__header'>

      <PhotoFavButton 
      className = "photo_modal_fav"
        isSelected={isFavorited}
        onClick={() => props.toggleFavorite(props.photo)}
      />
      <img src={props.photo.urls.regular} alt="Photo detail" className='photo-details-modal__image' />
      
          <img src={props.photo.user.profile} alt="Photo detail"  className='photo-details-modal__photographer-profile'/>
          
          
           <h2 className='photo-details-modal__photographer-details'>{props.photo.user.username}</h2>
          
           

           
            <p className='photo-details-modal__photographer-location'>{props.photo.location.city},{props.photo.location.country}</p>
            <br></br>

<h2>Similar Photos</h2>
           
        </div>


        <div className='photo-details-modal__images'>
        <PhotoList photos={props.photos}
        favoritePhotos={props.favoritePhotos}
        toggleFavorite={props.toggleFavorite}
        openModal={props.openModal}/>
        </div>
      </div>
      
        
          
        
      
    
  )
};

export default PhotoDetailsModal;
