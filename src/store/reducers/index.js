import { combineReducers } from 'redux';
import globalPlayer from './globalPlayer';
import songDetailPageReducer from '../../pages/SongDetailPage/reducer';
import playlistDetailPageReducer from '../../pages/PlaylistDetailPage/reducer';
import artistDetailPageReducer from '../../pages/ArtistDetailPage/reducer';

import newSongsReducer from '../../containers/NewSongs/reducer';
import chartMusicReducer from '../../containers/ChartMusic/reducer';
import playlistSuggestReducer from '../../containers/PlaylistSuggest/reducer';
import topicMusicReducer from '../../containers/TopicMusic/reducer';
import artistMusicCollectionReducer from '../../containers/ArtistMusicCollection/reducer';
import massiveHeaderCarouselReducer from '../../containers/MassiveHeaderCarousel/reducer';

export default combineReducers({
  globalPlayer,
  songDetailPageReducer,
  playlistDetailPageReducer,
  artistDetailPageReducer,
  newSongsReducer,
  chartMusicReducer,
  playlistSuggestReducer,
  topicMusicReducer,
  artistMusicCollectionReducer,
  massiveHeaderCarouselReducer,
});
