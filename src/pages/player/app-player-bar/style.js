import styled from 'styled-components';

export const PlaybarWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 52px;
  background-position: 0 0;
  background-repeat: repeat;
  z-index:99;

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    height: 47px;
    z-index:9999;
  }
  .hand{
    position: absolute;
    top: -10px;
    width: 100%;
    height: 20px;
    cursor: pointer;
  }

  .updn {
    position: relative;
    z-index: 11;
    .updown{
    position: absolute;
    top: -14px;
    right: 15px;
    width: 52px;
    height: 67px;
    background-position: 0 -380px;
    .btn{
      display: block;
      width: 18px;
      height: 18px;
      margin: 6px 0 0 17px;
      cursor: pointer;
    }
    .lock{
      background-position: -100px -380px;
    }
    .unlock{
      background-position: -80px -380px;
    }
    .unlock:hover{
      background-position: -80px -400px;
    }
    .lock:hover{
      background-position: -100px -400px;
    }
  }
}
`

export const Control = styled.div`
  display: flex;
  align-items: center;

  .prev, .next {
    width: 28px;
    height: 28px;
  }

  .prev {
    background-position: 0 -130px;
    cursor: pointer;
  }
  .prev:hover {
    background-position: -30px -130px;
  }

  .play {
    width: 36px;
    height: 36px;
    margin: 0 8px;
    background-position: 0 ${props => props.isPlaying ? "-165px" : "-204px"};
    cursor: pointer;
  }
  .play:hover {
    background-position: ${props => props.isPlaying ? "-40px -165px" : "-40px -204px"};
  }

  .next {
    background-position: -80px -130px;
    cursor: pointer;
  }
  .next:hover {
    background-position: -110px -130px;
  }
`

export const PlayInfo = styled.div`
  display: flex;
  width: 642px;
  align-items: center;

  .image {
    width: 34px;
    height: 34px;
    border-radius: 5px;
    position: relative;
    .placeholderImg{
      position: absolute;
      top: 0px;
      left: 0px;
      display: block;
      width: 34px;
      height: 35px;
      z-index:999;
      background-position: 0 -80px;
    }
    .default_album{
        width: 34px;
        height: 34px;
    }
  }

  .info {
    flex: 1;
    color: #a1a1a1;
    margin-left: 10px;

    .song {
      color: #e1e1e1;
      position: relative;
      top: 8px;
      left: 8px;

      .singer-name {
        color: #a1a1a1;
        margin-left: 10px;
      }
    }

    .progress {
      display: flex;
      align-items: center;

      .ant-slider {
        width: 493px;
        margin-right: 10px;

        .ant-slider-rail {
          height: 9px;
          background: url(${require("@/assets/img/progress_bar.png")}) right 0;
        }

        .ant-slider-track {
          height: 9px;
          background: url(${require("@/assets/img/progress_bar.png")}) left -66px;
        }

        .ant-slider-handle {
          width: 22px;
          height: 24px;
          border: none;
          margin-top: -7px;
          background: url(${require("@/assets/img/sprite_icon.png")}) 0 -250px;
        }
        .ant-slider-handle:hover {
          background: url(${require("@/assets/img/sprite_icon.png")}) 0 -280px;
        }
      }

      .time {
        .now-time {
          color: #e1e1e1;
        }
        .divider {
          margin: 0 3px;
        }
      }
    }
  }
`

export const Operator = styled.div`
  display: flex;
  align-items:center;
  position: relative;
  top: 5px;
  height: 100%;

  .btn {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }

  .favor {
    background-position: -88px -163px;
  }
  .favor:hover {
    background-position: -88px -189px;
  }

  .share {
    background-position: -114px -163px;
  }

  .share:hover {
    background-position: -114px -189px;
  }

  .right {
    width: 126px;
    height:100%;
    padding-left: 13px;
    background-position: -147px -248px;
    position: relative;
    display:flex;
    align-items:center;
    .volume-slider{
      position: absolute;
      top: -117px;
      left: 8px;
      clear: both;
      width: 32px;
      height: 113px;
      padding:4px 0;
      z-index:9999;
      .bg{
        position: absolute;
        top: 0;
        left: 0;
        width: 32px;
        height: 113px;
        background-position: 0 -503px;
      }
         
     .ant-slider-vertical{
        height:calc(100% - 8px);
      } 
         
      .ant-slider-rail {
          width: 4px;
          background: url(${require("@/assets/img/playbar_sprite.png")}) right 0;
        }

        .ant-slider-track {
          width: 4px;
          background: url(${require("@/assets/img/playbar_sprite.png")});
          background-position: -40px bottom;
        }

        .ant-slider-handle {
          width: 18px;
          height: 20px;
          border: none;
          margin-left: -7px;
          background: url(${require("@/assets/img/sprite_icon.png")});
          background-position:-40px -250px;
        }
        .ant-slider-handle:hover {
          background: url(${require("@/assets/img/sprite_icon.png")});
          background-position: -40px -280px;
        }
    }
    
    .volume {
      background-position: -2px -248px;
    }
    .volume:hover {
      background-position: -31px -248px;
    }

    .loop {
      background-position: ${props => {
    switch (props.sequence) {
      case 1:
        return "-66px -248px"
      case 2:
        return "-66px -344px"
      default:
        return "-3px -344px"
    }
  }};
    }

    .loop:hover {
      background-position: ${props => {
    switch (props.sequence) {
      case 1:
        return "-93px -248px"
      case 2:
        return "-93px -344px"
      default:
        return "-33px -344px"
    }
  }};
    }

    .playlist {
      padding-left: 18px;
      text-align: center;
      color: #ccc;
      width: 59px;
      background-position: -42px -68px;
    }
    .playlist:hover{
      background-position: -42px -98px;
      text-decoration:none;
    }
  }
`
