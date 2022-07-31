import styled from "styled-components";
import {device} from '../../contants'

export const ListPromotionWrapper = styled.div`
     width: 100%;
    height: auto;
    padding: 10px 75px;
    display: flex;
    flex-wrap: wrap;
    @media ${device.tablet}{
    padding: 10px;
   }
   @media ${device.mobileL}{
    padding: 5px;
   }
`