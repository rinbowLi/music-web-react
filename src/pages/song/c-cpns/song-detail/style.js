import styled from "styled-components";

export const SongDetailWarpper = styled.div`
  display: flex;
  justify-content: space-between;
  .cover-img {
    margin-top: 15px;
    margin-left: 10px;
    width: 198px;
    .cover {
      width: 198px;
      height: 198px;
      position: relative;
      .song-img {
        display: block;
        width: 130px;
        height: 130px;
        position: relative;
        left: 34px;
        top: 34px;
      }
      .mask {
        position: absolute;
        display: block;
        width: 206px;
        height: 205px;
        top: -4px;
        left: -4px;
        background-position: -140px -580px;
      }
    }
  }

  .song-detail {
    width: 414px;
    .top {
      height: auto;
      background-color: #ffffff;
      .head {
        margin-bottom: 15px;
        .simple-song {
          width: 54px;
          height: 24px;
          background-position: 0 -463px;
          display: inline-block;
          overflow: hidden;
          vertical-align: middle;
        }
        .song-name {
          position: relative;
          margin-left: 10px;
          top: 4px;
          font-size: 24px;
        }
      }
      .singer-name,
      .album-name {
        margin: 10px 0;
        color: #999;
        font-size: 12px;
        a {
          color: #0c73c2;
        }
      }
      .lyric {
        margin-top: 13px;
        line-height: 23px;
        font-size: 12px;
        color: #333;
        .click {
          cursor: pointer;
          color: #0c73c2;
          .down {
            display: inline-block;
            width: 11px;
            height: 8px;
            background-position: -65px -520px;
          }
        }
      }
    }
  }
`;
