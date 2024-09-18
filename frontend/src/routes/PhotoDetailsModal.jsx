import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={props.closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      {props.photo && (
        <div className="photo-details-modal__content">
          <img src={props.photo.urls.regular} alt="Photo detail" />
          <p>{props.photo.description}</p> {/* Example detail */}
        </div>
      )}
    </div>
  )
};

export default PhotoDetailsModal;
