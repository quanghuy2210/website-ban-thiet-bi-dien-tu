import styled from "styled-components";
import {device} from '../../../contants'

export const ListProductWrapper = styled.div`
   width: 80%;
   display: flex;
   flex-wrap: wrap;
   border-top: 1px solid #ddd;
   border-left:  1px solid #ddd;
   @media ${device.mobileL}{
      width: 75%;
   }
`