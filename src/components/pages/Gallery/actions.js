import getPhotos from './service';

export const startFetchPhotosActionType = () => ({ type: 'START_FETCH_PHOTOS' });
export const successFetchPhotosActionType = photos => ({ type: 'SACCES_FETCH_PHOTOS', photos });
export const stopFetchPhotosActionType = () => ({ type: 'STOP_FETCH_PHOTOS' });
export const failFetchPhotosActionType = () => ({ type: 'FAIL_FETCH_PHOTOS' });

export const fetchPhotosAction = () => (dispatch) => {
  dispatch(startFetchPhotosActionType());
  /**
     * Get photos params:
     * number page and limit photos
     */
  getPhotos()
    .then((photos) => {
      dispatch(successFetchPhotosActionType(photos));
      setTimeout(() => {
        dispatch(stopFetchPhotosActionType());
      }, 1000);
    })
    .catch(() => {
      dispatch(failFetchPhotosActionType());
    });
};
