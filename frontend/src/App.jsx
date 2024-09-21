import React ,{useState} from 'react';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import './App.scss';
import useApplicationData from 'hooks/useApplicationData';
import HomeRoute from 'routes/HomeRoute';



// Note: Rendering a single component to build components in isolation
const App = () => {


  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onLoadTopic,
    onClosePhotoDetailsModal,
  } = useApplicationData();

    
  
  
  

  return (
    <div className="App">
     
    
    <HomeRoute photos={photos} 
    topics={topics}
    favoritePhotos={favoritePhotos}
    toggleFavorite={toggleFavorite}
    />
    
    </div>
    
  );
};

export default App;
