import React, { memo } from "react";
import { CommentInputWarpper } from "./style";

export default memo(function CommentInput() {
  return (
    <CommentInputWarpper>
      <div className="left">
        <img src="http://s4.music.126.net/style/web2/img/default/default_avatar.jpg?param=50y50" alt=""/>
      </div>
      <div className="right">
        <div className="textarea-box">
            <textarea className="textarea" placeholder="评论"></textarea>
        </div>
        <div className="footer">
            <div className="left-footer">
                <i className="sprite_icon2 iconfont"></i>
                <i className="sprite_icon2 at"></i>
            </div>
            <div className="right-footer">
                <button className="sprite_button2 submit">评论</button>
            </div>
        </div>
      </div>
    </CommentInputWarpper>
  );
});
