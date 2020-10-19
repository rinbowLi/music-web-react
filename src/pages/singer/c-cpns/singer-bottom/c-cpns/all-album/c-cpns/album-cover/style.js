import styled from "styled-components";

export const AlbumWrapper = styled.div`
  width: ${(props) => props.width + "px"};
  margin-right: 18px;
  &:nth-child(4n) {
    margin-right: 0;
  }

  .album-image {
    position: relative;
    width: ${(props) => props.width + "px"};
    height: ${(props) => props.size + "px"};
    overflow: hidden;
    margin-top: 15px;
    display:block;

    &:hover .play {
      visibility: visible;
    }

    img {
      width: ${(props) => props.size + "px"};
      height: ${(props) => props.size + "px"};
    }

    .play {
      display: inline-block;
      width: 22px;
      height: 22px;
      background-position: 0px -85px;
      position: absolute;
      right: 33px;
      bottom: 5px;
      z-index: 999;
      cursor: pointer;
      visibility: hidden;
    }

    .cover {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-position: ${(props) => props.bgp};
      text-indent: -9999px;
    }
  }

  .album-info {
    font-size: 12px;
    width: ${(props) => props.size};
    .name {
      color: #000;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      display:block;
    }

    .artist {
      color: #666;
      display:block;
    }
  }
`;
