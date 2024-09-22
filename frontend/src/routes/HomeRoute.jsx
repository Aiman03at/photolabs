import React, {useState}from 'react';

import '../styles/HomeRoute.scss';

import TopNavigation from 'components/TopNavigationBar';

import PhotoList from 'components/PhotoList';
import PhotoDetailsModal from './PhotoDetailsModal';



const HomeRoute = (props) => {
  const { selectPhoto, closeModal,fetchPhotosByTopic } = props; // Add these from props

  const isFavPhotoExist = props.favoritePhotos.length > 0;
  
  
  return (
    <div className="home-route">
      
      <TopNavigation 
        topics={props.topics}  
        isFavPhotoExist={isFavPhotoExist} 
        openModal={selectPhoto} // Call selectPhoto to open modal
        fetchPhotosByTopic={fetchPhotosByTopic}
      />
      <PhotoList 
       photos={props.photos} 
        favoritePhotos={props.favoritePhotos}
        toggleFavorite={props.toggleFavorite}
        openModal={props.selectPhoto} // Same here
      />
      {props.isModalOpen && (
        <PhotoDetailsModal 
          photo={props.selectPhoto} 
          photos={props.photos} 
          favoritePhotos={props.favoritePhotos}
          toggleFavorite={props.toggleFavorite}
          closeModal={closeModal} 
        />
      )}
    </div>
  );
};

export default HomeRoute;
