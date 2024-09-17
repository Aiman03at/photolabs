import React from 'react';
import TopicList from './TopicList';
import '../styles/TopNavigationBar.scss'
import FavBadge from './FavBadge';
import { useState } from 'react';

const TopNavigation = () => {

  const [isFavPhotoExist, setIsFavPhotoExist] = useState(true);
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList/>
      <FavBadge isFavPhotoExist={isFavPhotoExist} />
    </div>
  )
}

export default TopNavigation;