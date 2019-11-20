import { combineReducers } from 'redux';
import globalPlayer from './globalPlayer';
import songDetailPageReducer from '../../pages/SongDetailPage/reducer';
import playlistDetailPageReducer from '../../pages/PlaylistDetailPage/reducer';
import artistDetailPageReducer from '../../pages/ArtistDetailPage/reducer';

import newSongsReducer from '../../containers/NewSongs/reducer';
import chartMusicReducer from '../../containers/ChartMusic/reducer';

export default combineReducers({
  globalPlayer,
  songDetailPageReducer,
  playlistDetailPageReducer,
  artistDetailPageReducer,
  newSongsReducer,
  chartMusicReducer,
});
