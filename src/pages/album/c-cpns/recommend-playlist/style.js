import styled from "styled-components"

export const RecommendPlaylistWrapper = styled.div`
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
        height:50px;
        width:50px;
        margin-right:10px;
        img{
          height:50px;
          width:50px;
        }
      }
      .right{
        .playlist-name{
          font-size:14px;
          color:#000;
          width: 140px;
          cursor: pointer;
          display:block;
        }
        .playlist-name:hover{
          text-decoration:underline;
        }
        .owner-name{
          font-size:12px;
          color:#999;
          width: 140px;
          cursor: pointer;
          span{
            color:#666;
            max-width: 106px;
            margin: 0 2px 0 4px;
          }
        }
        .owner-name span:hover{
          text-decoration:underline;
        }
      }
    }
  }
`