import styled from "styled-components";

export const SingerBoxWarpper = styled.div`
  .top {
    height: 30px;
    background-color: #c20c0c;
  }
`;

export const SingerWarpper = styled.div`
  background-color: #fff;
  display: flex;
`;

export const SingerLeftWrapper = styled.div`
  width: 709px;
  padding: 47px 30px 40px 39px;
`;

export const SingerRightWrapper = styled.div`
  width: 270px;
  border: 1px solid rgb(211, 211, 211);
`;

export const TopMenu = styled.div`
  display: flex;
  padding-left: 180px;
  position: relative;
  top: -4px;

  .item {
    a {
      display: inline-block;
      height: 20px;
      line-height: 20px;
      padding: 0 13px;
      margin: 7px 17px 0;
      color: #fff;

      &:hover,
      &.active {
        text-decoration: none;
        background-color: #9b0909;
        border-radius: 20px;
      }
    }
  }
`;
