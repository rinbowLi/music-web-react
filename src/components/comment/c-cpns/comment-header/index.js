import React, { memo } from "react";
import { CommentHeaderWarpper } from "./style";

export default memo(function CommentHeader({total}) {
  return (
    <CommentHeaderWarpper>
      <div className="header">
        <h3>评论</h3>
        <span>共{total}条评论</span>
      </div>
    </CommentHeaderWarpper>
  );
});
