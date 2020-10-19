import styled from "styled-components";

export const SongDetailWarpper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .cover-img {
    margin-top: 15px;
    margin-left: 10px;
    width: 198px;
    .cover {
      width: 198px;
      height: 198px;
      position: relative;
      right:10px;
      .song-img {
        display: block;
        width: 177px;
        height: 177px;
      }
      .mask {
        position: absolute;
        display: block;
        width: 209px;
        height: 177px;
        background-position: 0 -986px;
        top: 0;
        left: 0;
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
          background-position: 0 -186px;
          display: inline-block;
          overflow: hidden;
          vertical-align: middle;
        }
        .song-name {
          position: relative;
          margin-left: 10px;
          top: 4px;
          font-size: 20px;
        }
      }
      .singer-name {
        margin: 0 0 20px;
        line-height: 18px;
  
        .createtime{
          color: #999;
          font-size:12px;
          margin-top:5px;
        }
        a {
          color: #0c73c2;
          cursor: pointer;
        }
        a:hover{
          text-decoration:underline;
        }
      }
    }
  }
  .desc{
    margin-top: 4px;
    line-height: 18px;
    color: #666;
    p{
      color: #333;
    }
    div{
      text-indent:24px;
      margin-top: 4px;
    }
  }
`;
