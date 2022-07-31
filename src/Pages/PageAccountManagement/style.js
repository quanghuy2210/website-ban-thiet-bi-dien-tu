import styled from "styled-components";
import {device} from '../../contants'

export const PageAccountManagementWrapper = styled.div`
  width: 100%;
  padding: 10px 75px;
  @media ${device.tablet}{
    padding: 10px ;
  }
  h2{
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 10px;
    @media ${device.tablet}{
      font-size:1.3rem ;
    }
  }
  table{
    width: 100%;
    font-size: 1.2rem;
    @media ${device.mobileL}{
      display: none;
    }
    tr{
        border-bottom: 1px solid #ddd;
        border-right:1px solid #ddd ;
        border-left:1px solid #ddd ;
        &:first-child{
            border-top: 1px solid #ddd;
        }
        th{
            text-align: left;
        }
        td, th{
            padding: 10px;
        }
    }
  }
  .list-user-mobile{
    border: 1px solid #ddd;
    margin-bottom: 10px;
    padding: 10px;
    font-size: 1.2rem;
    display: none;
    @media ${device.mobileL}{
      display: block;
    }
    li:last-child{
      width: fit-content;
      border: 1px solid #ddd;
      padding: 5px 10px;
      border-radius: 2px;
      background-color: #3b5998;
      color: #fff;
    }
  }
`