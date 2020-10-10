import styled from 'styled-components';


export const SearchWrapper = styled.div`
 background-color:#fff;
 padding:40px;
 .searchInput{
    width: 420px;
    height: 40px;
    margin: 0 auto;
    background-position: 0 0;
    z-index: 10;
    input{
      float: left;
      width: 320px;
      height: 17px;
      margin: 12px 0 0 20px;
      padding: 0;
      background: #fff;
      border: none;
    }
    .btn{
      float: right;
      width: 50px;
      height: 40px;
      text-indent: -9999px;
      cursor: pointer;
    }
    button.btn:hover{
      background-position: -430px 0;
      text-decoration: none;
    }
 }
 .snote{
    margin: 28px 0 17px;
    color:#999;
  .count{
    color:#c20c0c;
  }
 }
 .tabs {
    height: 39px;
    background-position: 0 0;
    /* border-top: 1px solid #ccc; */
    background-repeat: repeat-x;
    display:flex;
    margin-bottom:20px;
    li{
      flex:1;
      height:39px;
      font-size:14px;
      line-height:39px;
      text-align:center;
      cursor: pointer;
      color:#333;
    }
    li.active{
      /* border-top-color:#c20c0c; */
      background-position: left -90px;
    }
    li:hover{
      background-position: left -90px;
      }
}
`