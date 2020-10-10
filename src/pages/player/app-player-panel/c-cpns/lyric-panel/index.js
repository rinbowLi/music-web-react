import React, { memo, useRef, useEffect } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import classNames from 'classnames';

import { scrollTo } from "@/utils/ui-helper";

import { PannelWrapper } from './style';

export default memo(function LyricPanel() {
  const { lyricList, curLyricIndex } = useSelector(state => ({
    lyricList: state.getIn(["player", "lyricList"]),
    curLyricIndex: state.getIn(["player", "curLyricIndex"])
  }), shallowEqual);

  // other hooks
  const panelRef = useRef();
  useEffect(() => {
    if (curLyricIndex > 0 && curLyricIndex < 3) return;
    scrollTo(panelRef.current, (curLyricIndex - 3) * 32, 300)
  }, [curLyricIndex]);

  return (
    <PannelWrapper ref={panelRef}>
      <div className="lrc-content">
        {
          lyricList.map((item, index) => {
            return (
              <div key={item.time}
                className={classNames("lrc-item", { "active": index === curLyricIndex })}>
                {item.content}
              </div>
            )
          })
        }
      </div>
    </PannelWrapper>
  )
})
