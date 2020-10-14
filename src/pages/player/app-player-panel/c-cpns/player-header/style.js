import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  height: 41px;
  line-height: 41px;
  background: url(${require("@/assets/img/playpanel_bg.png")}) 0 0;
`

export const HeaderLeft = styled.div`
  display: flex;
  justify-content: space-between;
  width: 553px;
  padding: 0 25px;

  h3 {
    color: #e2e2e2;
    font-weight: 700;
  }

  .operator {
    color: #ccc;

    button {
      background-color: transparent;
      color: #ccc;
    }

    .icon {
      display: inline-block;
      width: 16px;
      height: 16px;
      position: relative;
      top: 4px;
      right: 2px;
    }

    .favor {
      background-position: -24px 0;
      cursor: pointer;
    }

    .remove {
      width: 13px;
      background-position: -51px 0;
      cursor: pointer;
    }
  }
`

export const HeaderRight = styled.div`
  flex: 1;
  text-align: center;
  color: #fff;
  font-size: 14px;
  display:flex;
  .song-name{
    width:calc(100% - 30px);
  }
  .close{
    position: absolute;
    top: 6px;
    right: 8px;
    width: 30px;
    height: 30px;
    overflow: hidden;
    text-indent: -999px;
    cursor: pointer;
    background-position: -195px 9px;
    &:hover{
      background-position: -195px -21px;
    }
  }
`
