import { combineReducers } from "redux-immutable";
import { reducer as recommendReducer } from '../pages/discover/c-pages/recommend/store'
import { reducer as RankingReducer } from '../pages/discover/c-pages/ranking/store'
import { reducer as AlbumReducer } from '../pages/discover/c-pages/album/store'
import { reducer as ArtistReducer } from '../pages/discover/c-pages/artist/store'
import { reducer as DjradioReducer } from '../pages/discover/c-pages/djradio/store'
import { reducer as SongsReducer } from '../pages/discover/c-pages/songs/store'
import { reducer as playReducer } from '../pages/player/store'
import { reducer as searchReducer } from '../pages/search/store'

const cReducer = combineReducers({
  recommend: recommendReducer,
  player: playReducer,
  ranking:RankingReducer,
  album:AlbumReducer,
  artist:ArtistReducer,
  djradio:DjradioReducer,
  songs:SongsReducer,
  search:searchReducer,
});

export default cReducer;