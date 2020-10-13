import React, { memo, useState } from 'react'
import { LyricsWarpper } from './style';
import { useSelector, shallowEqual } from "react-redux"

import { nthIndexOf, highLight } from '@/utils/format-utils'

export default memo(function LyricDetail(props) {
  const { lyrics } = props;
  const [showLyric, setShowLyric] = useState(false)

  const { keywords } = useSelector(state => ({
    keywords: state.getIn(["search", "keywords"])
  }), shallowEqual);

  //从第一个出现关键词的地方截取歌词
  const txt = lyrics ? lyrics.txt.slice(lyrics.range[0].first) : "";
  //取出第四个\n所在的index，然后展示前四行歌词，其他的隐藏
  const index = nthIndexOf(txt, "\n", 4);
  return (
    <LyricsWarpper>
      <div className="whiteSpace">
        <div className="first-lyric whiteSpace">
          <span dangerouslySetInnerHTML={{ __html: highLight(txt.slice(0, index), keywords) }}></span>
        </div>
        <div className="second-lyric whiteSpace" style={{ display: showLyric ? "block" : "none" }}>
          <span dangerouslySetInnerHTML={{ __html: highLight(txt.slice(index + 1), keywords) }}></span>
        </div>
        <div className="click" onClick={() => setShowLyric(!showLyric)}>{showLyric ? "收起" : "展开"}<span className="sprite_icon2 down"></span></div>
      </div>
    </LyricsWarpper>
  )
})
