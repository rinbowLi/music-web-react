import styled from "styled-components"

export const SimilarSongsWrapper = styled.div`
  margin-top:40px;
  .title{
    height: 23px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
    color: #333;
    font-size:12px;
    font-weight:bold;
  }
  .list{
    margin-bottom:25px;
    .list-item{
      margin-top:10px;
      display:flex;
      align-items:center;
      .left{
        width: 156px;
        line-height: 16px;
        .song-name{
          color:#333;
          font-size:12px;
          cursor: pointer;
        }
        .song-name:hover{
          text-decoration:underline;
        }
        .singer-name{
          color:#999;
          font-size:12px;
          cursor: pointer;
        }
        .singer-name:hover{
          text-decoration:underline;
        }
      }
      .right{
        display:flex;
        height:32px;
        align-items:center;
        .play{
          display:inline-block;
          width: 10px;
          height: 11px;
          margin-left: 16px;
          background-position: -69px -455px;
          opacity:0.9;
          cursor: pointer;
        }
        .add{
          display:inline-block;
          width: 10px;
          height: 11px;
          margin-left: 16px;
          background-position: -87px -454px;
          opacity:0.9;
          cursor: pointer;
        }
      }
    }
  }
`