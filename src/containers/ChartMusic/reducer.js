import { chartMusicConstants } from './constants'
const initialState = {
  isFetching: false,
  isError: false,
  isSuccess: false,
  isFetched: false,

  playlist: {
    id: 'bxh',
    name: 'Bảng Xếp Hạng',
    avatarUrl: 'https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/1/e/9/5/1e95661a09af33bf404de2a941467f49.jpg',
    songs: [],
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    // BXH
    case chartMusicConstants.GET_BXH_REQUEST:
      return {
        ...state,
        isFetching: true,
        isError: false,
        isSuccess: false,
      };

    case chartMusicConstants.GET_BXH_FAILURE:
      return {
        ...state,
        isFetching: false,
        isError: true,
        isSuccess: false,
      };

    case chartMusicConstants.GET_BXH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isError: false,
        isSuccess: true,
        isFetched: true,
        playlist: {
          ...state.playlist,
          songs: action.payload,
        },
      };

    default:
      return state;
  }
};
