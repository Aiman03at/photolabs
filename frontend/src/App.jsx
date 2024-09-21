import React, {useEffect} from 'react';

import './App.scss';
import useApplicationData from 'hooks/useApplicationData';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';


// Note: Rendering a single component to build components in isolation
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
  } = useApplicationData();


  useEffect(() => {
    fetch("/api/photos")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log('Fetched data:', data); // Log the fetched data
      setPhotoData(data);
    })
    .catch((error) => console.error('Error fetching photos:', error));
}, [setPhotoData]);

// Fetch topics
useEffect(() => {
  fetch("/api/topics") // Adjust the endpoint as necessary
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log('Fetched topics:', data);
      setTopicData(data); // Call the setter for topics
    })
    .catch((error) => console.error('Error fetching topics:', error));
}, [setTopicData]);

  return (
    <div className="App">
      <HomeRoute
        photos={state.photoData}
        topics={state.topicData}
        favoritePhotos={state.favoritePhotoIds}
        onAddFavorite={addFavPhoto}
        onRemoveFavorite={removeFavPhoto}
        onSelectPhoto={selectPhoto}
      />
      {state.isModalOpen && (
        <PhotoDetailsModal
          photo={state.selectedPhoto}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default App;
