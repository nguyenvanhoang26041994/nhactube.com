import { mainConstants } from './constants'
const initialState = {
  isFetching: false,
  isError: false,
  isSuccess: false,
  isFetched: false,

  list: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case mainConstants.GET_DATA_REQUEST:
      return {
        ...state,
        isFetching: true,
        isError: false,
        isSuccess: false,
      };

    case mainConstants.GET_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        isError: true,
        isSuccess: false,
      };

    case mainConstants.GET_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isError: false,
        isSuccess: true,
        isFetched: true,
        list:  action.payload,
      };

    default:
      return state;
  }
};
