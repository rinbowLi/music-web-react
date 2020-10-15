import React, { memo } from "react";
import { CommentItemWarpper } from "./style";

import {
  getSizeImage,
  formatYearMonthDay,
  getCount,
} from "@/utils/format-utils";

export default memo(function CommentItem({ hotComment }) {
  return (
    <CommentItemWarpper>
      {hotComment &&
        hotComment.map((item) => {
          return (
            <div className="box" key={item.commentId}>
              <div className="left">
                <img
                  src={getSizeImage(item.user.avatarUrl, 50)}
                  alt={item.user.nickname}
                />
              </div>
              <div className="right">
                <div className="top">
                  <span>{item.user.nickname}</span>
                  {/* <img src="https://p1.music.126.net/G2KYG9JjrGGP5grSaXOZaw==/109951163309837705.png?param=12y12" /> */}
                  ：{item.content}
                </div>
                {
                  item.beReplied.length > 0 &&
                  <div className="beReply">
                    <span className="darr"><i className="bd">◆</i><i className="bg">◆</i></span>
                    <div className="reply-content">
                      <span className="nickname">{item.beReplied && item.beReplied[0].user.nickname}</span>
                      {/* <img src="https://p1.music.126.net/G2KYG9JjrGGP5grSaXOZaw==/109951163309837705.png?param=12y12" /> */}
                    ：<span dangerouslySetInnerHTML={{ __html: (item.beReplied.length > 0 && item.beReplied[0].content !== null) > 0 ? item.beReplied[0].content.replace(/\n/g, "<br />") : "" }}></span>
                    </div>

                  </div>
                }
                <div className="bottom">
                  <div className="time">{formatYearMonthDay(item.time)}</div>
                  <div className="likeAndReply">
                    <div className="like">
                      <i className="sprite_icon3 likeicon"></i>(
                      {getCount(item.likedCount)})
                    </div>
                    <span className="sep">|</span>
                    <div className="reply">回复</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </CommentItemWarpper>
  );
});
