import { useState } from 'react';

export default function useApplicationData() {
  // State object to hold the entire state of the application
  const [state, setState] = useState({
    favoritePhotoIds: [],  // Stores the IDs of favorited photos
    selectedPhoto: null,   // Stores the currently selected photo
    isModalOpen: false,    // Boolean to track if the photo details modal is open
  });

  // Action to update favorite photo IDs
  const updateToFavPhotoIds = (photoId) => {
    setState(prev => {
      // Toggle the favorite state for the photo
      const isFav = prev.favoritePhotoIds.includes(photoId);
      const newFavPhotoIds = isFav
        ? prev.favoritePhotoIds.filter(id => id !== photoId)
        : [...prev.favoritePhotoIds, photoId];

      return {
        ...prev,
        favoritePhotoIds: newFavPhotoIds,
      };
    });
  };

  // Action to set the selected photo
  const setPhotoSelected = (photo) => {
    setState(prev => ({
      ...prev,
      selectedPhoto: photo,
      isModalOpen: true,  // Open the modal when a photo is selected
    }));
  };

  // Action to close the modal
  const onClosePhotoDetailsModal = () => {
    setState(prev => ({
      ...prev,
      selectedPhoto: null,
      isModalOpen: false,
    }));
  };

  // Return the state and actions
  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  };
}