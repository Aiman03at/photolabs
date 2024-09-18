import React from 'react';

import '../styles/HomeRoute.scss';

import TopNavigation from 'components/TopNavigationBar';

import PhotoList from 'components/PhotoList';


const HomeRoute = (props) => {
  return (
    <div className="home-route">

      <TopNavigation topics={props.topics}  
      favoritePhotos={props.favoritePhotos}/>


      <PhotoList photos={props.photos} 
      favoritePhotos={props.favoritePhotos}
      toggleFavorite={props.toggleFavorite}/>

      
    </div>
  );
};

export default HomeRoute;
