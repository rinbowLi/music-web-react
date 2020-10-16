import styled from "styled-components";

export const PlaylistWrapper = styled.div`
  margin-top: 27px;
  .head{
    height:33px;
    border-bottom:2px solid #c20c0c;
    display:flex;
    justify-content:space-between;
    .left{
      .title{
        font-size: 20px;
        line-height: 28px;
        color: #333;
      }
      .count{
        margin-left:20px;
        color:#666;
        font-size:12px;
      }
    }
    .right{
      line-height:28px;
      display:flex;
      align-items:center;
      span{
        color:#c20c0c;
        font-weight: bold;
      }
    }
  }
  .list{
    border: 1px solid #d9d9d9;
    .w1{
        width: 74px;
      }
      .w2{
        width: calc(66% - 185px);
      }
      .w3{
        width: 111px;
      }
      .w4{
        width: 14% ;
      }
      .w5{
        width: 20%;
        display:block;
        line-height:30px;
      }
    .list-header{
      display:flex;
      div{
        text-align: left;
        font-weight: normal;
        color: #666;
        height: 38px;
        background-color: #f7f7f7;
        background-position: 0 0;
        background-repeat: repeat-x;
        line-height:38px;
        border-right:1px solid #d9d9d9;
        border-bottom:1px solid transparent;
        padding-left:10px;
        &:last-child{
        border-right:none;
      }
      }
    
    }
    .list-main{
      .list-item{
        display:flex;
        div{
          padding: 6px 10px;
          line-height: 18px;
          text-align: left;
        }
        .code{
          color:#999;
          display:flex;
          align-items:center;
          justify-content:space-between;
          .play{
            display:inline-block;
            height:17px;
            width:17px;
            cursor: pointer;
            background-position: 0 -103px;
            &:hover{
              background-position: 0 -128px;
            }
          }
        }
        .time{
          color:#666;
        }
      }
      .list-item:nth-child(odd){
        background-color: #f7f7f7;
      }
    }
  }
`;