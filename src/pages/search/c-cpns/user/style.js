import styled from 'styled-components'


export const UsersWarpper = styled.div`
  width:100%;
  /* display:flex;
  flex-wrap:wrap;
  .item{

  } */
  .item{
    display:flex;
    align-items:center;
    padding: 6px 10px 4px 18px;
    border: 1px solid #fff;
    .songName{
      width:60%;
      display:flex;
      align-items:center;
     .left{
       width:50px;
       height:50px;
       position: relative;
       margin-right:10px;
       .mask{
        background-position: -160px 0;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        }
      }
      .right{
        position: relative;
        margin-left:10px;
        font-size: 14px;
        .name{
          cursor: pointer;
          display:flex;
          align-items:center;
          .band{
            display:inline-block;
            width: 12px;
            height: 13px;
            background-position: -110px -190px;
          }
          .male{
            display:inline-block;
            width: 14px;
            height: 15px;
            background-position: -70px -20px;
            margin-left:5px;
          }
          .female{
            display:inline-block;
            width: 14px;
            height: 15px;
            background-position: -70px 0;
            margin-left:5px;
          }
        }
        .sign{
          width: 100%;
          margin-top: 5px;
          font-size:12px;
          color:#999;
        }
      }
    }
    .singerName{
      margin-right:calc(10% - 64px);
      width:64px;
      height: 27px;
      background-position: 0 -990px;
      line-height: 27px;
      padding-left: 26px;
      color: #5d5d5d;
      cursor: pointer;
    }
    .albumName{
      width:15%;
      text-overflow:ellipsis;
      overflow:hidden;
      color:#999;
    }
    .time{
      width:15%;
      color:#999;
    }
  }
  .item:nth-child(even){
      background-color:#f7f7f7;
      border-color:#f7f7f7;
  }
  .item:hover{
    border: 1px solid #e1e1e1;
    background: #f2f2f2;
  }

`