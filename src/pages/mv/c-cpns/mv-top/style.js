import styled from 'styled-components'

export const MvTopWrapper = styled.div`
.mv{
  margin-top: -23px;
  .head{
    margin-bottom: 8px;
    .title{
      padding-top: 10px;
      display:flex;
      align-items:center;
      h2{
        max-width: 80%;
        margin-top: -10px;
        margin-right: 8px;
        font-size: 24px;
        line-height: 32px;
        font-weight: normal;
        .mv-icon{
          width: 29px;
          height: 18px;
          background-position: -230px -480px;
          display: inline-block;
          overflow: hidden;
          vertical-align: middle;
          margin-right:10px;
      }
      }
      a{
      margin: 4px 0 0 0;
      line-height: 17px;
      color: #0c73c2;
    }
    }
  }
  .mv-video{
    height:360px;
    width:640px;
  }
  .btn-box{
    margin: 12px 0 45px;
    display:flex;
    .like{
      margin-right: 10px;
      color: #333;
      background-position: right -100px;
      padding: 0 5px 0 0;
      white-space: nowrap;
      i{
        padding: 0 5px 0 10px;
        color: #333;
        background-position: 0 -59px;
        display: flex;;
        height: 31px;
        align-items:center;
        overflow: hidden;
        vertical-align: top;
        text-align: center;
        cursor: pointer;
        em{
          display:inline-block;
          margin-right:6px;
          width: 17px;
          height: 15px;
          background-position: 0 -95px;
        }
      }
      &:hover{
        background-position: right -182px;
      }
      &:hover i{
        background-position: 0 -141px;
      }
    }
    .add{
      margin-right: 10px;
      color: #333;
      background-position: right -1020px;
      padding: 0 5px 0 0;
      white-space: nowrap;
      i{
        display:inline-block;
        background-position: 0 -977px;
        padding-right: 2px;
        padding-left: 28px;
        height: 31px;
        line-height: 30px;
        min-width: 23px;
        cursor: pointer;
      }
      &:hover{
        background-position: right -1106px;
      }
      &:hover i{
        background-position: 0 -1063px;
      }
    }
    .share{
      margin-right: 10px;
      background-position: right -1020px;
      height: 31px;
      line-height: 30px;
      min-width: 23px;
      cursor: pointer;
      padding-right:5px;
      i{
        display:inline-block;
        height: 31px;
        line-height: 30px;
        min-width: 23px;
        padding-right: 2px;
        padding-left: 28px;
        cursor: pointer;
        background-position: 0 -1225px;
      }
      &:hover{
        background-position: right -1106px;
      }
      &:hover i{
        background-position: 0 -1268px;
      }
    }
  }
}
`