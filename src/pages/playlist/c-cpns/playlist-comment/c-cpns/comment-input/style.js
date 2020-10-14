import styled from "styled-components";

export const CommentInputWarpper = styled.div`
  margin: 20px 0;
  display: flex;
  .left {
    width: 50px;
    height: 50px;
    img {
      width: 50px;
      height: 50px;
    }
  }
  .right {
    width: calc(100% - 62px);
    margin-left: 12px;
    .textarea-box {
      position: relative;
      padding-right: 14px;
      .textarea {
        margin: 0;
        padding: 5px 6px 6px;
        border: 1px solid #cdcdcd;
        border-radius: 2px;
        line-height: 19px;
        box-sizing: content-box;
        height: 50px;
        display: block;
        width: 100%;
        background-color: #fff;
        resize: none;
      }
    }
    .footer {
      padding-top: 10px;
      display: flex;
      justify-content: space-between;
      .left-footer {
        display: flex;
        .iconfont {
          width: 18px;
          height: 18px;
          background-position: -40px -490px;
          display: block;
          cursor: pointer;
          margin-right: 10px;
        }
        .at {
          width: 18px;
          height: 18px;
          background-position: -60px -490px;
          display: block;
          cursor: pointer;
          margin-right: 10px;
        }
      }
      .right-footer {
        .submit {
          width: 46px;
          height: 25px;
          background-position: -84px -64px;
          color: #fff;
          text-align: center;
          line-height: 25px;
          cursor: pointer;
        }
        .submit:hover {
          background-position: -84px -94px;
        }
      }
    }
  }
`;
