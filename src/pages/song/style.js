import styled from "styled-components";

export const SongBoxWrapper = styled.div`
  .top {
    height: 30px;
    background-color: #c20c0c;
  }
`;

export const SongWrapper = styled.div`
  display: flex;
  border-left: 1px solid #d3d3d3;
  background-color: #fff;
`;

export const SongLeft = styled.div`
  padding: 47px 30px 40px 39px;
  width: 729px;
`;

export const SongRight = styled.div`
  width: 250px;
  border-style: solid;
  border-color: rgb(211, 211, 211);
  border-image: initial;
  border-width: 0px 1px;
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
