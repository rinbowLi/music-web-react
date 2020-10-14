import styled from 'styled-components';

export const OperationBarWrapper = styled.div`
  display: flex;
  align-items: center;
  button{
    padding:0;
  }

  .play {
    display: flex;
    align-items: center;
    margin-right: 5px;

    .play-icon {
      display: inline-block;
      height: 31px;
      line-height: 31px;
      background-position: right -428px;

      .play {
        color: #fff;
        display: flex;
        align-items: center;
        padding: 0 7px 0 8px;
        background-position: 0 -387px;
        cursor: pointer;

        i {
          display: inline-block;
          width: 20px;
          height: 18px;
          margin: -2px 2px 0;
          background-position: 0 -1622px;
        }
      }
    }

    .add-icon {
      display: inline-block;
      width: 31px;
      height: 31px;
      margin-left: -3px;
      padding-right: 0;
      background-position: 0 -1588px;
      text-indent: -9999px;
      cursor: pointer;
    }
  }

  .item {
    display: inline-block;
    height: 31px;
    margin-right: 6px;
    padding-right: 5px;
    background-position: right -1020px;
    
    .icon {
      display: inline-block;
      height: 31px;
      line-height: 31px;
      padding: 0 7px 0 28px;
      font-family: simsun;
    }

    .favor-icon {
      background-position: 0 -977px;
      cursor: pointer;
    }

    .share-icon {
      background-position: 0 -1225px;
      cursor: pointer;
    }

    .download-icon {
      background-position: 0 -2761px;
      cursor: pointer;
    }

    .comment-icon {
      background-position: 0 -1465px;
      cursor: pointer;
    }
  }
`