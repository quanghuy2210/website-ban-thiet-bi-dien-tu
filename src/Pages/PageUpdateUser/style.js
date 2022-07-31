import styled from "styled-components";
import {device} from '../../contants'

export const PageUpdateUserWrapper = styled.div`
  width: 100%;
  padding: 10px 75px;
  @media ${device.mobileL}{
    padding: 10px;
  }

  h2{
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 10px;
  }
  .gt{
    display: flex;
    align-items: center;
    label{
        display: block !important;
        width: 25%;
        padding-left: 5rem;
        font-size: 1.2rem;
        @media ${device.tablet}{
          padding-left: 2rem
        }
        @media ${device.mobileL}{
       padding-left: 1rem;
    }
    }
    .over-input{
        margin-right: 2rem;
        flex-direction: row-reverse;
        input{
            width: fit-content;
        }
        label{
            padding-left: 0.5rem;
        }
    }
    
   }
   button{
    display: inline-block;
    padding: 12px 20px;
    background-color: #365899;
    font-size: 1.5rem;
    border: none;
    border-radius: 3px;
    a{
      color: #fff;
    }
   }
  
`