import styled from "styled-components";

export const SingerRightWarpper = styled.div`
  padding: 20px 40px 40px 30px;
  .title {
    height: 23px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
    color: #333;
    font-size: 12px;
    font-weight: bold;
  }
  .singer-list {
    display: flex;
    flex-wrap: wrap;
    /* flex:1; */
    .singer-item {
      display: block;
      width: 50px;
      height: 92px;
      margin-left: 24px;
      img {
        height: 50px;
        width: 50px;
      }
      &:nth-child(3n-2) {
        margin-left: 0;
      }
      div {
        margin-top: 7px;
        text-align: center;
      }
    }
  }
`;
