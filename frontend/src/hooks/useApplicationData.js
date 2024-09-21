import photos from 'mocks/photos';
import { useReducer } from 'react';


// Action types
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  CLOSE_MODAL: 'CLOSE_MODAL',
};

// Initial state
const initialState = {
  favoritePhotoIds: [],
  selectedPhoto: null,
  isModalOpen: false,
  photoData: [],  // Holds photo data
  topicData: [],  // Holds topic data
};

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photoData: action.payload,
      };

    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        favoritePhotoIds: [...state.favoritePhotoIds, action.payload],
      };

    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favoritePhotoIds: state.favoritePhotoIds.filter((id) => id !== action.payload),
      };

    

    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topicData: action.payload,
      };

    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        selectedPhoto: action.payload,
        isModalOpen: true,
      };

    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return {
        ...state,
        selectedPhoto: action.payload.photo,
        similarPhotos: action.payload.similarPhotos,
        isModalOpen: true,
      };

    case ACTIONS.CLOSE_MODAL:
      return {
        ...state,
        selectedPhoto: null,
        isModalOpen: false,
      };

    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
}

// Custom hook
export default function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Action to add a photo to favorites
  const addFavPhoto = (photoId) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: photoId });
  };

  // Action to remove a photo from favorites
  const removeFavPhoto = (photoId) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: photoId });
  };

  // Action to set the photo data (typically from API)
  const setPhotoData = (photos) => {
    dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photos });
  };

  // Action to set the topic data (typically from API)
  const setTopicData = (topics) => {
    dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: topics });
  };

  // Action to select a photo and open the modal
  const selectPhoto = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });
  };

  // Action to display photo details in the modal
  const displayPhotoDetails = (photo, similarPhotos) => {
    dispatch({
      type: ACTIONS.DISPLAY_PHOTO_DETAILS,
      payload: { photo, similarPhotos },
    });
  };

  // Action to close the modal
  const closeModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  };

  // Return state and actions
  return {
    state,
    addFavPhoto,
    removeFavPhoto,
    setPhotoData,
    setTopicData,
    selectPhoto,
    displayPhotoDetails,
    closeModal,
  };
}

