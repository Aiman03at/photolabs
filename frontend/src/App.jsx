import React from 'react';
import TopicList from 'components/TopicList';
//import PhotoListItem from './components/PhotoListItem';
import PhotoList from 'components/PhotoList';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  


  const photos = new Array(3).fill(null);


  

  return (
    <div className="App">
     
     {/*{photos.map((photo, index) => (
  <PhotoListItem
    key={index}
    sampleDataForPhotoListItem={sampleDataForPhotoListItem}
    
  />
))}*/}
<PhotoList/>
    </div>
    
  );
};

export default App;
