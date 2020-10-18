import React, { memo } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";

import { HeaderWrapper, HeaderLeft, HeaderRight } from "./style";
import { changeIsshowPanelAction , changeCurrentPlayListAction} from "../../../store/actionCreator";

export default memo(function PlayHeader() {
  const { playList, currentSong } = useSelector(
    (state) => ({
      playList: state.getIn(["player", "playList"]),
      currentSong: state.getIn(["player", "currentSong"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  return (
    <HeaderWrapper>
      <HeaderLeft>
        <h3>播放列表({playList.length})</h3>
        <div className="operator">
          <button>
            <i className="sprite_playlist icon favor"></i>
            收藏全部
          </button>
          <button className="remove-button" onClick={()=>dispatch(changeCurrentPlayListAction([]))}>
            <i className="sprite_playlist icon remove"></i>
            清除
          </button>
        </div>
      </HeaderLeft>
      <HeaderRight>
        <div className="song-name">{currentSong.name}</div>
        <div
          className="sprite_playlist icon close"
          onClick={() => dispatch(changeIsshowPanelAction(false))}
        >
          关闭
        </div>
      </HeaderRight>
    </HeaderWrapper>
  );
});
