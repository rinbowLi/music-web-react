import React, { memo } from "react";
import { CommentHotWarpper } from "./style";

import CommentItem from "../comment-item";

export default memo(function CommentHot({ hotComment, title }) {
  return (
    <CommentHotWarpper>
      <h3>{title}</h3>
      <CommentItem hotComment={hotComment} />
    </CommentHotWarpper>
  );
});
