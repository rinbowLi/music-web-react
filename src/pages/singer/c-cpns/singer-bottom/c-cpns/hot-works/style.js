import styled from "styled-components";

export const HotWorksWarpper = styled.div`
  .button-box {
    margin: 20px 0 10px;
    display: flex;
    justify-content: space-between;
    .left {
      display: flex;
      .play {
        color: #fff;
        background-position: right -428px;
        padding: 0 5px 0 0;
        white-space: nowrap;
        display: inline-block;
        display: inline;
        zoom: 1;
        height: 31px;
        line-height: 31px;
        overflow: hidden;
        line-height: 32px;
        vertical-align: top;
        text-align: center;
        display: inline-block;
        cursor: pointer;
        i {
          background-position: 0 -387px;
          padding: 0 7px 0 8px;
          display: flex;
          align-items: center;
          em {
            display: inline-block;
            background-position: 0 -1622px;
            overflow: hidden;
            width: 20px;
            height: 18px;
          }
        }
        &:hover {
          background-position: right -510px;
        }
        &:hover i {
          background-position: 0 -469px;
        }
        &:hover i em {
          background-position: -28px -1622px;
        }
      }
      .addto {
        margin-right: 5px;
        width: 31px;
        margin-left: -3px;
        padding-right: 0;
        background-position: 0 -1588px;
        height: 31px;
        line-height: 30px;
        min-width: 23px;
        cursor: pointer;
        display: inline-block;
        &:hover {
          background-position: -40px -1588px;
        }
      }
      .fav {
        margin-right: 6px;
        background-position: right -1020px;
        display: inline-block;
        height: 31px;
        overflow: hidden;
        padding-right: 5px;
        i {
          background-position: 0 -977px;
          display: inline-block;
          height: 31px;
          line-height: 30px;
          min-width: 23px;
          cursor: pointer;
          padding: 0 7px 0 36px;
        }
        &:hover {
          background-position: right -1106px;
        }
        &:hover i {
          background-position: 0 -1063px;
        }
      }
    }
    .right {
      .botton-list {
        &:hover .list {
          display: block;
        }
        .btn-hot {
          padding-right: 5px;
          background-position: right -100px;
          display: block;
          color: #333;
          font-size: 12px;
          cursor: pointer;
          &:hover {
            background-position: right -182px;
          }
          &:hover i {
            background-position: 0 -141px;
          }
          i {
            color: #333;
            background-position: 0 -59px;
            padding: 0 15px 0 20px;
            pointer-events: none;
            display: inline-block;
            height: 31px;
            line-height: 31px;
            overflow: hidden;
            vertical-align: top;
            text-align: center;
            cursor: pointer;
            .arrow {
              margin-left: 6px;
              display: inline-block;
              overflow: hidden;
              vertical-align: middle;
              width: 8px;
              height: 5px;
            }
          }
        }
        .list {
          position: absolute;
          z-index: 1;
          display: none;
          width: 100px;
          height: 93px;
          margin-top: -2px;
          line-height: 30px;
          border: solid 1px #c3c3c3;
          border-bottom-right-radius: 4px;
          border-bottom-left-radius: 4px;
          box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
          background-color: #fff;
          div {
            padding-left: 20px;
            text-align: left;
            border-bottom: solid 1px rgba(0, 0, 0, 0.1);
            cursor: pointer;
          }
          div:hover {
            background-color: rgba(0, 0, 0, 0.1);
          }
        }
      }
    }
  }

  .song-list {
    .w1 {
      width: 74px;
    }
    .w2 {
      width: calc(80% - 143px);
    }
    .w3 {
      width: 69px;
    }
    .w4 {
      width: 20%;
    }
    .list-item {
      display: flex;
      div {
        padding: 6px 10px;
        line-height: 18px;
        text-align: left;
      }
      .code {
        color: #999;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .play {
          display: inline-block;
          height: 17px;
          width: 17px;
          cursor: pointer;
          background-position: 0 -103px;
          &:hover {
            background-position: 0 -128px;
          }
        }
      }
      .time {
        color: #666;
      }
    }
    .list-item:nth-child(odd) {
      background-color: #f7f7f7;
    }
  }
`;
