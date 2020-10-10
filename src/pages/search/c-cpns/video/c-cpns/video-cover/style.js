import styled from 'styled-components'


export const VideoCoverWarpper = styled.div`
  width: 159px;
  margin-right:26px;
  margin-bottom:40px;
  cursor: pointer;
  &:nth-child(5n){
    margin-right:0;
  }
  .cover{
    width: 159px;
    height: 90px;
    position: relative;
    .playCount{
      position: absolute;
      top:0;
      right:0;
      font-size:12px;
      color:#ffffff;
      padding:0 5px;
      text-shadow: -2px 1px rgba(0,0,0,.4);
      background-color:rgba(0,0,0,.3);
      display:flex;
      align-items:center;
      .video{
        display:inline-block;
        margin-right:3px;
        width: 15px;
        height: 10px;
        background-position: -60px -310px;
      }
    }
    .time{
      position:absolute;
      left:0;
      bottom:0;
      font-size:12px;
      color:#ffffff;
      padding-left:5px;
    }
  }

  .bottom{
    width: 159px;
    .title{
      width: 100%;
      height: auto;
      margin: 7px 0 1px;
      border: none;
      font-size: 14px;
      font-weight: normal;
    }
    .by{
      color:#666;
      font-size:12px;
    }
  }

`