import styled from "styled-components";
import {device} from '../../contants'

export const LoginWrapper = styled.div`
   margin: 10px 75px;
   padding: 20px;
   display: flex;
   border: 1px solid #ddd;
   @media ${device.tablet}{
      margin: 10px;
   }
   @media ${device.mobileL}{
        margin: 5px;
        flex-wrap: wrap;
    }
`