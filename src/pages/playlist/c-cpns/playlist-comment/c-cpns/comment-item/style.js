import styled from "styled-components";

export const CommentItemWarpper = styled.div`
  display: flex;
  flex-wrap: wrap;
  .box {
    display: flex;
    padding: 15px 0;
    border-top: 1px dotted #ccc;
    width: 100%;
    .left {
      width: 50px;
      height: 50px;
      margin-right: 10px;
      img {
        width: 50px;
        height: 50px;
      }
    }
    .right {
      width: calc(100% - 60px);
      .top {
        background-color: #ffffff;
        height: auto;
        span {
          color: #0c73c2;
          margin-right: 5px;
          cursor: pointer;
        }
        img {
          height: 12px;
          width: 12px;
          vertical-align: -1px;
          margin-right: 5px;
        }
      }
      .beReply{
        padding: 8px 19px;
        margin-top: 10px;
        line-height: 20px;
        background: #f4f4f4;
        border: 1px solid #dedede;
        word-break: break-word;
        color:#666;
        position: relative;
        .darr {
          position: absolute;
          top: -7px;
          left: 20px;
          font-size: 12px;
          line-height: 14px;
          i{
            position: absolute;
            top: 0;
            left: 0;
          }
          .bd {
            color: #dedede;
          }
          .bg{
            top: 1px;
            color: #f4f4f4;
          }
        }
        .reply-content{
          .nickname{
            color: #0c73c2;
            margin-right: 5px;
            cursor: pointer;
          }
        }
      }
      .bottom {
        margin-top: 15px;
        display: flex;
        justify-content: space-between;
        .time {
          color: #999;
        }
        .likeAndReply {
          display: flex;
          .like {
            text-decoration: none;
            cursor: pointer;
            color: #333;
            .likeicon {
              width: 15px;
              height: 14px;
              background-position: -150px 0;
              margin-right: 5px;
              vertical-align: -2px;
              display: inline-block;
            }
          }
          .sep {
            margin: 0 8px;
            color: #ccc;
          }
          .reply {
            color: #666;
            cursor: pointer;
          }
          .reply:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
`;
