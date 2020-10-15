import styled from 'styled-components'

export const UserHeaderWrapper = styled.div`
   margin-bottom:43px;
   display:flex;
   .left{
     width:188px;
     height:188px;
     margin-right:40px;
     img{
      display: block;
      width: 188px;
      height: 188px;
      padding: 3px;
      background: #fff;
      border: 1px solid #d5d5d5;
     }
   }
   .right{
     width:670px;
     .username-box{
        display:flex;
        padding-bottom: 12px;
        margin-bottom: 10px;
        border-bottom: 1px solid #ddd;
       .username{
        padding-bottom: 3px;
        margin-top: 3px;
        font-size: 22px;
        font-weight: normal;
        line-height: 30px;
       }
       .level-and-sex{
        padding-bottom: 3px;
        margin-left:10px;
        display:flex;
        align-items:center;
        .level{
          background-position: -135px -190px;
          display: inline-block;
          height: 19px;
          overflow: hidden;
          padding-left: 29px;
          line-height: 21px;
          color: #e03a24;
          font-size: 14px;
          font-weight: bold;
          font-style: italic;
          span{
            vertical-align: 3px;
          }
          i{
            width: 9px;
            height: 19px;
            background-position: -191px -190px;
            display: inline-block;
            overflow: hidden;
            vertical-align: -1px;
          }
        }
        .sex{
          margin-left: 8px;
          width: 20px;
          height: 20px;
          background-position: -41px -27px;
          display: inline-block;
          overflow: hidden;
          vertical-align: middle;
        }
       }
       .button-box{
         margin-left:15px;
         display:flex;
         align-items:center;
         .mail{
          display: inline-block;
          width: 75px;
          height: 31px;
          background-position: 0 -810px;
          line-height: 31px;
          padding-left: 30px;
          cursor: pointer;
          &:hover{
            background-position: 0 -845px;
          }
         }
         .follow{
          width: 70px;
          height: 31px;
          padding-left: 30px;
          background-position: 0 -720px;
          color: #fff;
          line-height: 30px;
          margin-left:15px;
          display:inline-block;
          cursor: pointer;
          &:hover{
            background-position: -80px -720px;
            color: #fff;
          }
         }
       }
     }
     .userdata{
        height: 41px;
        margin-bottom: 15px;
        display:flex;
        .data1{
          border-left: none;
          padding-left:0;
        }
        div{
          padding: 0 40px 0 20px;
          color:#666;
          font-size:12px;
          border-left: 1px solid #ddd;
          strong{
            display: block;
            margin-top: -4px;
            font-size: 24px;
            height:28px;
            line-height:28px;
            font-weight: normal;
            cursor: pointer;
          }
          span{
            display: block;
            text-indent: 2px;
            cursor: pointer;
          }
          &:hover{
            color: #0c73c2;
          }
        }
       }
       .user-desc,.user-info{
        margin-bottom: 5px;
        line-height: 21px;
        color:#666;
        font-size:12px;
        display:flex;
        align-items:center;
        a{
          display:inline-block;
          width: 20px;
          height: 20px;
          margin-left:5px;
          i{
            display:inline-block;
            background-position: 0 0;
            width: 20px;
            height: 20px;
          }
        }
       }
   }
`