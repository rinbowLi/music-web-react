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
      right:10px;
      .song-img {
        display: block;
        width: 200px;
        height: 200px;
      }
      .mask {
        position: absolute;
        display: block;
        width: 208px;
        height: 208px;
        background-position: 0 -1285px;
        top: -4px;
        left: -4px;
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
          background-position: 0 -243px;
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
        line-height: 35px;
        display:flex;
        align-items:center;
        .img{
          width:40px;
          height:40px;
          margin-right: 10px;
        }
        .createtime{
          margin-left: 15px;
          color: #999;
          font-size:12px;
        }
        span {
          color: #0c73c2;
          cursor: pointer;
        }
        span:hover{
          text-decoration:underline;
        }
      }
      .tags{
        margin: 25px 0 5px;
        line-height: 22px;
        .tag-txt{
          font-weight: normal;
          color: #666;
        }
        .tag-item{
          display:inline-block;
          padding: 0 10px 0 0;
          text-shadow: 0 1px #fdfdfd;
          background-position: right -27px;
          color: #777;
          height: 22px;
          line-height: 22px;
          margin: 0px 10px 3px 0;
          cursor: pointer;
          i{
            display:inline-block;
            position: relative;
            zoom: 1;
            padding: 0 3px 0 13px;
            background-position: 0 0;
          }
          &:hover{
            background-position: right -1430px;
          }
          &:hover i{
            background-position: 0 -1400px;
          }
        }
      }
      .desc{
        margin-top: 4px;
        line-height: 18px;
        color: #666;
      }
    }
  }
`;
