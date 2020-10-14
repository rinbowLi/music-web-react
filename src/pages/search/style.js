import styled from 'styled-components';


export const SearchWrapper = styled.div`
 background-color:#fff;
 padding:40px;
 .searchInput{
    width: 420px;
    height: 40px;
    margin: 0 auto;
    background-position: 0 0;
    position: relative;
    z-index: 10;
    input{
      float: left;
      width: 320px;
      height: 17px;
      margin: 12px 0 0 20px;
      padding: 0;
      background: #fff;
      border: none;
    }
    .btn{
      float: right;
      width: 50px;
      height: 40px;
      text-indent: -9999px;
      cursor: pointer;
    }
    button.btn:hover{
      background-position: -430px 0;
      text-decoration: none;
    }
    .suggest-box{
      position: absolute;
      z-index: 120;
      left: 0;
      top: 43px;
      width: 418px;
      box-sizing: border-box;
      border: 1px solid #bebebe;
      border-radius: 4px;
      background: #fff;
      box-shadow: 0 4px 7px #555;
      text-shadow: 0 1px 0 rgba(255, 255, 255, 0.9);
      .user-suggest{
        height: 40px;
        padding: 11px 10px;
        border-bottom: 1px solid #e2e2e2;
        color:#666;
      }
      .user-suggest span{
        cursor: pointer;
      }
      .user-suggest span:hover{
        background-color:#e3e5e7;
      }
      .other-suggest{
        .singer{
          display:flex;
          .left{
            width:62px;
            padding: 10px 0 0 10px;
            border-right: 1px solid #e2e2e2;
            font-size:12px;
            color:#666;
            display:flex;
            align-items:center;
            .singer{
              display:inline-block;
              width: 14px;
              height: 15px;
              background-position: -50px -300px;
              margin: 0 4px 0 0;
            }
          }
          .right{
            width:calc(100% - 63px);
            margin-top: -1px;
            padding: 6px 0 5px;
            border-top: 1px solid #e2e2e2;
            .list-item{
              display:block;
              width: 100%;
              text-indent: 12px;
              line-height: 24px;
              cursor: pointer;
            }
            .list-item:hover{
              background-color:#e3e5e7;
              text-decoration:none;
            }
          }
        }
        .song{
          display:flex;
          .left{
            width:62px;
            padding: 10px 0 0 10px;
            border-right: 1px solid #e2e2e2;
            font-size:12px;
            color:#666;
            display:flex;
            align-items:center;
            .song{
              display:inline-block;
              width: 14px;
              height: 15px;
              background-position: -35px -300px;
              margin: 0 4px 0 0;
            }
          }
          .right{
            width:calc(100% - 63px);
            margin-top: -1px;
            padding: 6px 0 5px;
            border-top: 1px solid #e2e2e2;
            .list-item{
              display:block;
              width: 100%;
              text-indent: 12px;
              line-height: 24px;
              cursor: pointer;
            }
            .list-item:hover{
              background-color:#e3e5e7;
              text-decoration:none;
            }
          }
        }
        .album{
          display:flex;
          .left{
            width:62px;
            padding: 10px 0 0 10px;
            border-right: 1px solid #e2e2e2;
            font-size:12px;
            color:#666;
            display:flex;
            align-items:center;
            .album{
              display:inline-block;
              width: 14px;
              height: 15px;
              background-position: -35px -320px;
              margin: 0 4px 0 0;
            }
          }
          .right{
            width:calc(100% - 63px);
            margin-top: -1px;
            padding: 6px 0 5px;
            border-top: 1px solid #e2e2e2;
            .list-item{
              display:block;
              width: 100%;
              text-indent: 12px;
              line-height: 24px;
              cursor: pointer;
            }
            .list-item:hover{
              background-color:#e3e5e7;
              text-decoration:none;
            }
          }
        }
      }
    }
 }
 .snote{
    margin: 28px 0 17px;
    color:#999;
  .count{
    color:#c20c0c;
  }
 }
 .tabs {
    height: 39px;
    background-position: 0 0;
    /* border-top: 1px solid #ccc; */
    background-repeat: repeat-x;
    display:flex;
    margin-bottom:20px;
    li{
      flex:1;
      height:39px;
      font-size:14px;
      line-height:39px;
      text-align:center;
      cursor: pointer;
      color:#333;
    }
    li.active{
      /* border-top-color:#c20c0c; */
      background-position: left -90px;
    }
    li:hover{
      background-position: left -90px;
      }
}
`