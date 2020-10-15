import styled from 'styled-components'

export const UserListenRankingWrapper = styled.div`
   .title{
    height: 33px;
    border-bottom: 2px solid #c20c0c;
    display:flex;
    justify-content:space-between;
    .left{
      font-size: 20px;
      line-height: 28px;
      span{
        font-size:12px;
        margin-left: 10px;
        line-height: 26px;
        font-weight: 400;
        color: #666;
      }
    }
    .right{
      display:flex;
      align-items:center;
      span{
        margin-left: 8px;
        line-height: 26px;
        color: #666;
        cursor: pointer;
      }
      .active{
        color: #333;
        font-weight: 700;
      }
      i{
        width: 1px;
        height: 12px;
        background-color: #999;
        margin-left: 8px;
        display:inline-block;
      }
    }
   
   }
`