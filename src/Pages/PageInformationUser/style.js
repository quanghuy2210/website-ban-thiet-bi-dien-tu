import styled from "styled-components";
import {device} from '../../contants'

export const PageInformationUserWrapper = styled.div`
  width: 100%;
  padding: 20px 75px;
  @media ${device.mobileL}{
    padding: 10px;
  }
  h2{
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 10px;
  }
  table{
    width: 100%;
    border-top: 1px solid #ddd;
    border-right: 1px solid #ddd;
    font-size: 1.3rem;
    tr{
        border-bottom: 1px solid #ddd;
        td{
            border-left: 1px solid #ddd;
            padding: 5px 10px;
        }
    }
  }
  a{
    display: inline-block;
    margin-top: 10px;
    padding: 12px 20px;
    background-color:#365899 ;
    border: none;
    font-size: 1.3rem;
    color: #fff;
    font-weight: 500;
    border-radius: 3px;
  }
`