import styled from "styled-components";

export const RelatedMVWarpper = styled.div`
margin: 20px 0 0 0;
.list{
  display:flex;
  flex-wrap:wrap;
  .item{
    margin-right:29px;
    margin-bottom:30px;
    .img-box{
      width: 137px;
      height: 103px;
      position: relative;
      cursor: pointer;
      .mask{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-position: 0 -1170px;
    }
    .play{
      position:absolute;
      width: 44px;
      height: 44px;
      top: 50%;
      left: 50%;
      margin: -22px 0 0 -22px;
      background-position: -30px -135px;
      &:hover{
        background-position: -30px -85px;
      }
      }
    }
    .desc{
      margin: 8px 0 3px;
      font-size: 14px;
      width: 137px;
      cursor: pointer;
      color: #000;
      &:hover{
        text-decoration:underline;
      }
    }

    &:nth-child(4n){
      margin-right:0;
    }
  }
}
`