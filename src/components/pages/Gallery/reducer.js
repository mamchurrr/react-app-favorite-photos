const initialState = {
  photos: [],
  isLoad: false,
  isFail: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'START_FETCH_PHOTOS':
      return {
        ...state,
        isLoad: true,
      };
    case 'SACCES_FETCH_PHOTOS':
      return {
        ...state,
        photos: action.photos,
      };
    case 'FAIL_FETCH_PHOTOS':
      return {
        ...state,
        isFail: true,
      };
    case 'STOP_FETCH_PHOTOS':
      return {
        ...state,
        isLoad: false,
      };

    default: return state;
  }
}
