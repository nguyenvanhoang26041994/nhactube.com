import { topicMusicConstants } from './constants';

// TOPICS
export const fetchTopicMusicRequest = () => ({
  type: topicMusicConstants.GET_TOPIC_MUSIC_REQUEST,
});

export const fetchTopicMusicFailure = () => ({
  type: topicMusicConstants.GET_TOPIC_MUSIC_FAILURE,
});

export const fetchTopicMusicSuccess = (topics) => ({
  type: topicMusicConstants.GET_TOPIC_MUSIC_SUCCESS,
  payload: topics,
});

export const fetchTopicMusic = () => async (dispatch) => {
  dispatch(fetchTopicMusicRequest());
  try {
    const { data } = await fetch('https://www.nhactube.com/api/stuff/hot-topic').then(res => res.json());
    dispatch(fetchTopicMusicSuccess(data.chain));
    return data;
  } catch(e) {
    dispatch(fetchTopicMusicFailure());
  }
}
