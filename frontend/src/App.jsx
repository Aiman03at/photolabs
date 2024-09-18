import React ,{useState} from 'react';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import './App.scss';

import HomeRoute from 'routes/HomeRoute';



// Note: Rendering a single component to build components in isolation
const App = () => {


  const [favoritePhotos, setFavoritePhotos] = useState([]);
  console.log(`Fav Photos--${favoritePhotos}`);
  // Function to add/remove a photo from favorites
  const toggleFavorite = (photo) => {
    setFavoritePhotos((prevFavorites) => {
      if (prevFavorites.some((favPhoto) => favPhoto.id === photo.id)) {
        // Remove if already favorited
        return prevFavorites.filter((favPhoto) => favPhoto.id !== photo.id);
      } else {
        // Add to favorites
        return [...prevFavorites, photo];
      }
    });
    console.log(`Fav Photos--${favoritePhotos}`);
  };
  
  console.log(`Fav Photos--${favoritePhotos}`);

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
