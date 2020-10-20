import styled from 'styled-components'

export const VideoRightWrapper = styled.div`
  padding: 20px 40px 40px 30px;
  .title{
    height: 23px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
    color: #333;
    font-size:12px;
    font-weight:bold;
  }
  .list{
    margin-top: -4px;
    padding-bottom: 34px;
    p{
      line-height: 18px;
      color:#999;
    }
    .desc{
      margin-top: 10px;
      color: #333;
    }
  }
  .video-list{
    margin-bottom: 20px;
    .item{
      display:flex;
      justify-content:space-between;
      margin-bottom: 15px;
      .left{
        display:block;
        width: 96px;
        height: 54px;
        position: relative;
        img{
          display: block;
          width: 100%;
          height: 100%;
        }
        p{
          position: absolute;
          top: 0;
          right: 0;
          padding-right: 5px;
          height: 20px;
          line-height: 20px;
          color: #fff;
          box-sizing: border-box;
          text-align: right;
          text-shadow: -2px 1px rgba(0,0,0,.4);
          background-position: 0 0;
          span{
            display:inline-block;
            margin: -2px 2px 0 0;
            width: 15px;
            height: 10px;
            background-position: -60px -310px;
            overflow: hidden;
            vertical-align: middle;
          }
        }
      }
      .right{
        width:95px;
        height:53px;
        .mv-name{
          line-height: 21px;
        }
        .time,.owner{
          color:#999;
          line-height: 16px;
        }
      }
    }
  }
`