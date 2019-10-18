import { combineReducers } from 'redux';
import globalPlayer from './globalPlayer';
import songDetailPageReducer from '../../pages/SongDetailPage/reducer';
import playlistDetailPageReducer from '../../pages/PlaylistDetailPage/reducer';

export default combineReducers({
  globalPlayer,
  songDetailPageReducer,
  playlistDetailPageReducer,
});
