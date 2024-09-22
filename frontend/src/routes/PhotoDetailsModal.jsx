import React from 'react';
import PhotoList from 'components/PhotoList';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = (props) => {
  // Ensure photo and user exist before accessing their properties
  const { photo, favoritePhotos, toggleFavorite, closeModal, openModal, photos } = props;
  
  if (!photo) return null; // Handle case where photo data isn't passed yet

  const isFavorited = favoritePhotos.some((favPhoto) => favPhoto.id === photo.id);

  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={closeModal}
        aria-label="Close Modal"
      >
        <img src={closeSymbol} alt="Close modal" />
      </button>

      <div className="photo-details-modal__header">
        <PhotoFavButton
          className="photo-details-modal__fav-button"
          isSelected={isFavorited}
          onClick={() => toggleFavorite(photo)}
        />

        <img
          src={photo.urls?.regular || ''}
          alt="Photo detail"
          className="photo-details-modal__image"
        />
        <br></br>
        <img
          src={photo.user?.profile || ''}
          alt={`${photo.user?.username}'s profile`}
          className="photo-details-modal__photographer-profile"
        />

        <h2 className="photo-details-modal__photographer-details">
          {photo.user?.name || 'Unknown Photographer'}
        </h2>

        <p className="photo-details-modal__photographer-location">
          {photo.location?.city || 'Unknown City'},{' '}
          {photo.location?.country || 'Unknown Country'}
        </p>

        <h2>Similar Photos</h2>
      </div>

      <div className="photo-details-modal__images">
        <PhotoList
          photos={photos}
          favoritePhotos={favoritePhotos}
          toggleFavorite={toggleFavorite}
          openModal={openModal}
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;