import React, {useState}from 'react';

import '../styles/HomeRoute.scss';

import TopNavigation from 'components/TopNavigationBar';

import PhotoList from 'components/PhotoList';
import PhotoDetailsModal from './PhotoDetailsModal';



const HomeRoute = (props) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPhoto(null);
  };

  const isFavPhotoExist = props.favoritePhotos.length > 0;
  return (
    <div className="home-route">

      <TopNavigation topics={props.topics}  
      isFavPhotoExist={isFavPhotoExist} 
      openModal={openModal}/>


      <PhotoList photos={props.photos} 
      favoritePhotos={props.favoritePhotos}
      toggleFavorite={props.toggleFavorite}
      openModal={openModal} />


        {isModalOpen && (
        <PhotoDetailsModal 
          photo={selectedPhoto} 
          photos={props.photos} 
          favoritePhotos={props.favoritePhotos}
          toggleFavorite={props.toggleFavorite}
          closeModal={closeModal} 
          openModal={openModal}
          
        />
      )}  


    </div>
  );
};

export default HomeRoute;
