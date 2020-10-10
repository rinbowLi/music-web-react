import styled from 'styled-components'


export const SongsWarpper = styled.div`
  width:100%;
  .item{
    border: 1px solid #fff;
  }
  .item:nth-child(even){
      background-color:#f7f7f7;
      border-color:#f7f7f7;
  }
  .item:hover{
    border: 1px solid #e1e1e1;
    background: #f2f2f2;
  }

  .lyric{
    margin: 10px 0 18px 52px;
    color: #666;
    line-height: 23px;
    word-wrap: break-word;
    word-break: break-all;
  }

`