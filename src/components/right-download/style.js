import styled from 'styled-components'

export const DownLoadWarpper = styled.div`
  margin-top:40px;
  width:200px;
  .title{
    height: 23px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
    color: #333;
    font-size:12px;
    font-weight:bold;
  }
  .icons{
    height: 65px;
    margin-bottom: 10px;
    background-position: 0 -392px;
    display:flex;
    .iphone{
      /* background-position: 0 -472px; */
      display: block;
      width: 42px;
      height: 48px;
      text-indent: -9999px;
    }
    .iphone:hover{
      background-position: 0 -472px;
    }
    .pc{
      /* background-position: -72px -472px; */
      display: block;
      width: 60px;
      margin: 0 26px 0 30px;
      height: 48px;
      text-indent: -9999px;
    }
    .pc:hover{
      background-position: -72px -472px;
    }
    .android{
      /* background-position: -158px -472px; */
      display: block;
      width: 42px;
      height: 48px;
      text-indent: -9999px;
    }
    .android:hover{
      background-position: -158px -472px;
    }
  }
  .text{
    color:#999;
    font-size:12px;
  }
`