import styled from "styled-components";

export const SingerTopWarpper = styled.div`
  position: relative;
  zoom: 1;
  height: 333px;
  margin-top: -20px;
  .header {
    display: flex;
    h2 {
      max-width: 75%;
      height: 34px;
      line-height: 24px;
      font-weight: normal;
      font-size: 24px;
      color: #333;
    }
    h3 {
      max-width: 23%;
      padding-left: 10px;
      font-size: 14px;
      line-height: 32px;
      color: #999;
      font-weight: normal;
    }
  }
  .img-box {
    display: block;
    width: 640px;
    height: 300px;
    position: relative;
    .img {
      display: block;
      width: 640px;
      height: 300px;
      position: absolute;
    }
    .sub {
      display: block;
      position: absolute;
      bottom: 18px;
      right: 20px;
      width: 76px;
      height: 32px;
      background-position: 0 -500px;
      text-indent: -9999px;
      cursor: pointer;
      &:hover {
        background-position: 0 -540px;
      }
    }
  }
  .tabs {
    height: 39px;
    border: 1px solid #ccc;
    border-width: 0 1px;
    background-position: 0 0;
    background-repeat: repeat-x;
    display: flex;
    div {
      position: relative;
      left: -1px;
      height: 39px;
      font-size: 14px;
      padding-left: 2px;
      cursor: pointer;
      span {
        height: 39px;
        width: 134px;
        padding: 2px 2px 0 0;
        line-height: 37px;
        cursor: pointer;
        text-align: center;
        display: inline-block;
        color: #333;
        &:hover {
          background-position: right -45px;
        }
      }

      &.active {
        background-position: left -90px;
        span {
          background-position: right -90px;
        }
      }
    }
  }
`;
