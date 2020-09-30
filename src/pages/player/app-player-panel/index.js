import React, { memo } from 'react';
import { useSelector, shallowEqual } from 'react-redux'

import PlayHeader from './c-cpns/player-header';
import PlayList from './c-cpns/play-list';
import LyricPanel from './c-cpns/lyric-panel';
import { PanelWrapper } from './style';

export default memo(function HYAppPlayList() {

  // const dispatch = useDispatch();
  const { currentSong } = useSelector(state => ({
    currentSong: state.getIn(["player", "currentSong"])
  }), shallowEqual)

  const imgUrl = (currentSong.al && currentSong.al.picUrl) || "https://p4.music.126.net/qeN7o2R3_OTPhghmkctFBQ==/764160591569856.jpg";
  return (
    <PanelWrapper>
      <PlayHeader />
      <div className="main">
        <img className="image" src={imgUrl} alt="" />
        <PlayList />
        <LyricPanel />
      </div>
    </PanelWrapper>
  )
})
