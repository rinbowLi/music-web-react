import React, { memo } from 'react'
import {DownLoadWarpper} from './style'

export default memo(function RightDownload() {
  return (
    <DownLoadWarpper>
      <div className="title">网易云音乐多端下载</div>
      <div className="sprite icons">
        <a className="sprite iphone" href="https://itunes.apple.com/cn/app/id590338362" target="_blank" rel="noopener noreferrer">iphone</a>
        <a className="sprite pc" href="https://music.163.com/api/pc/download/latest" target="_blank" rel="noopener noreferrer">pc</a>
        <a className="sprite android" href="https://music.163.com/api/android/download/latest2" target="_blank" rel="noopener noreferrer">android</a>
      </div>
      <div className="text">同步歌单，随时畅听320k好音乐</div>
    </DownLoadWarpper>
  )
})
