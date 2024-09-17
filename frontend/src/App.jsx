import React from 'react';
import TopicList from 'components/TopicList';
import TopicListItem from 'components/TopicListItem';
//import PhotoListItem from './components/PhotoListItem';
import PhotoList from 'components/PhotoList';
import './App.scss';
import PhotoListItem from 'components/PhotoListItem';

// Note: Rendering a single component to build components in isolation
const App = () => {

  


  


  

  return (
    <div className="App">
     
     {/*{photos.map((photo, index) => (
  <PhotoListItem
    key={index}
    sampleDataForPhotoListItem={sampleDataForPhotoListItem}
    
  />
))}*/}
<TopicList/>
<PhotoList/>

    </div>
    
  );
};

export default App;
