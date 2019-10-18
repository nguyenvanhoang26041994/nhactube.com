import { combineReducers } from 'redux';
import globalPlayer from './globalPlayer';
import songDetailPageReducer from '../../pages/SongDetailPage/reducer';

export default combineReducers({
  globalPlayer,
  songDetailPageReducer,
});
