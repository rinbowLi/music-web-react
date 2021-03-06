import styled from 'styled-components'


export const LyricsWarpper = styled.div`
  width:100%;
  /* display:flex;
  flex-wrap:wrap;
  .item{

  } */
  &:nth-child(even) .item{
    background-color:#f7f7f7;
      border-color:#f7f7f7;
  }
  
  .item{
    display:flex;
    align-items:center;
    padding: 10px 10px 8px 18px;
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
    }
    .singerName{
      width:20%;
      text-overflow:ellipsis;
      overflow:hidden;
    }
    .albumName{
      width:20%;
      text-overflow:ellipsis;
      overflow:hidden;
    }
    .time{
      width:10%;
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