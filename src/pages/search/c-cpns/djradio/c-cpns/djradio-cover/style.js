import styled from 'styled-components'


export const DjradioCoverWarpper = styled.div`
  width: 150px;
  margin-right:37px;
  margin-bottom:40px;
  cursor: pointer;
  &:nth-child(5n){
    margin-right:0;
  }
  .cover{
    width: 150px;
    height: 150px;
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