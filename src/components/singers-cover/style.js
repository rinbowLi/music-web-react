import styled from "styled-components";

export const SingersCoverWrapper = styled.div`
  width: 130px;
  margin: 20px ${props => (props.right || 0)} 20px 0;
  cursor: pointer;
  &:nth-child(6n){
    margin-right:0;
  }

  .cover-top {
    position: relative;

    &>img {
      width: 130px;
      height: 130px;
    }
    
    .cover {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-position: 0 0;
    }
  }

  .cover-bottom {
    font-size: 12px;
    color: #000;
    margin-top: 5px;
  }
`