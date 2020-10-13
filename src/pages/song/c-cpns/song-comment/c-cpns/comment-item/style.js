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
        a {
          color: #0c73c2;
          margin-right: 5px;
        }
        img {
          height: 12px;
          width: 12px;
          vertical-align: -1px;
          margin-right: 5px;
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
