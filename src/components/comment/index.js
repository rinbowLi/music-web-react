import React, { memo, useEffect, useState } from "react";
import { SongCommentWarpper } from "./style";

import CommentHeader from "./c-cpns/comment-header";
import CommentInput from "./c-cpns/comment-input";
import CommentHot from "./c-cpns/comment-hot";

export default memo(function Comment({ id, fn }) {
  const [comment, setcomment] = useState({})
  useEffect(() => {
    id && fn(id).then(res => {
      setcomment(res)
    })

  }, [id, fn])

  return (
    <SongCommentWarpper>
      <CommentHeader total={comment.total} />
      <CommentInput />
      <CommentHot hotComment={comment.hotComments} title="精彩评论" />
      <br />
      <br />
      <CommentHot hotComment={comment.comments} title="最新评论" />
    </SongCommentWarpper>
  );
});
