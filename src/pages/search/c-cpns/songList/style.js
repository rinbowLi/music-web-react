import styled from 'styled-components'


export const SongListWarpper = styled.div`
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
      width:50%;
      display:flex;
      align-items:center;
      .play{
        display: inline-block;
        width: 17px;
        height: 17px;
        margin-right: 15px;
        cursor: pointer;
        background-position: 0 -103px;
      }
      .play:hover{
        background-position: 0 -128px;
      }
      img{
        margin-right:10px;
      }
    }
    .singerName{
      width:20%;
      text-overflow:ellipsis;
      overflow:hidden;
      color:#666;
      span{
        color:#999;
        margin-right:5px;
      }
    }
    .albumName{
      width:20%;
      text-overflow:ellipsis;
      overflow:hidden;
      color:#999;
    }
    .time{
      width:10%;
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