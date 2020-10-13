import React, { memo, Fragment } from "react";
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
                  <a href="#">{item.user.nickname}</a>
                  {/* <img src="https://p1.music.126.net/G2KYG9JjrGGP5grSaXOZaw==/109951163309837705.png?param=12y12" /> */}
                  ：{item.content}
                </div>
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
