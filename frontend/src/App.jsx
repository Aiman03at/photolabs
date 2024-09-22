import React, { useEffect } from 'react';
import './App.scss';
import useApplicationData from 'hooks/useApplicationData';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

const App = () => {
  const {
    state,
    addFavPhoto,
    removeFavPhoto,
    setPhotoData,
    setTopicData,
    selectPhoto,
    displayPhotoDetails,
    closeModal,
    fetchPhotosByTopic
  } = useApplicationData();


  const toggleFavorite = (photo) => {
    if (state.favoritePhotoIds.includes(photo.id)) {
      removeFavPhoto(photo.id);  // Assuming you have this action
    } else {
      addFavPhoto(photo.id);  // Assuming you have this action
    }
  };

  // Fetch photos
  useEffect(() => {
    fetch("/api/photos")
      .then((response) => response.json())
      .then((data) => setPhotoData(data));
  }, []);

  // Fetch topics
  useEffect(() => {
    fetch("/api/topics")
      .then((response) => response.json())
      .then((data) => setTopicData(data));
  }, []);

  return (
    <div className="App">
      <HomeRoute
        photos={state.photoData}
        topics={state.topicData}
        favoritePhotos={state.favoritePhotoIds}
        toggleFavorite={(id) => 
          state.favoritePhotoIds.includes(id) 
            ? removeFavPhoto(id) 
            : addFavPhoto(id)}
        selectPhoto={selectPhoto}
        isModalOpen={state.isModalOpen}
        fetchPhotosByTopic={fetchPhotosByTopic}
      />
      {state.isModalOpen && (
        <PhotoDetailsModal
        photo={state.selectedPhoto}
        favoritePhotos={state.favoritePhotoIds}  
        toggleFavorite ={toggleFavorite}// Ensure this is passed correctly
        closeModal={closeModal}
        photos = {state.photoData}
        />
      )}
    </div>
  );
};

export default App;