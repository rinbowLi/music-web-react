import styled from 'styled-components';


export const HeaderWarpper = styled.div`
height:75px;
background-color:#242424;
.content{
  height:70px;
  /* background-color:aliceblue; */
  display:flex;
  justify-content:space-between;
  align-items:center;
}

.divider{
  height:5px;
  background-color:#c20c0c;
}
`

export const HeaderLeft =styled.div`
display: flex;

.logo {
  display: block;
  width: 176px;
  height: 70px;
  background-position: 0 0;
  text-indent: -9999px;
}

.select-list {
  display: flex;
  line-height: 70px;

  .select-item {
    position: relative;
    font-size:14px;

    a {
      display: block;
      padding: 0 20px;
      color: #ccc;
    }

    :last-of-type a {
      position: relative;
      ::after {
        position: absolute;
        content: "";
        width: 28px;
        height: 19px;
        background-image: url(${require("@/assets/img/sprite_01.png")});
        background-position: -190px 0;
        top: 20px;
        right: -15px;
      }
    }

    &:hover a, a.active {
      color: #fff;
      background: #000;
      text-decoration: none;
    }

    .active .icon {
      position: absolute;
      display: inline-block;
      width: 12px;
      height: 7px;
      bottom: -1px;
      left: 50%;
      transform: translate(-50%, 0);
      background-position: -226px 0;
    }
  }
}
`

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  color: #ccc;
  font-size: 12px;
  padding-right: 30px;
  position: relative;
  
  .suggest-box{
      position: absolute;
      z-index: 120;
      left: 0;
      top: 40px;
      width: 240px;
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
              width: 100%;
              text-indent: 12px;
              line-height: 24px;
              cursor: pointer;
            }
            .list-item:hover{
              background-color:#e3e5e7;
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
              width: 100%;
              text-indent: 12px;
              line-height: 24px;
              cursor: pointer;
            }
            .list-item:hover{
              background-color:#e3e5e7;
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
              width: 100%;
              text-indent: 12px;
              line-height: 24px;
              cursor: pointer;
            }
            .list-item:hover{
              background-color:#e3e5e7;
            }
          }
        }
      }
    }

  .search {
    width: 158px;
    height: 32px;
    border-radius: 16px;

    input {
      &::placeholder {
        font-size: 12px;
      }
    }
  }

  .center {
    width: 90px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border: 1px solid #666;
    border-radius: 16px;
    margin: 0 16px;
  }
`