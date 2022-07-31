import styled from "styled-components";
import {device} from '../../../contants'

export const DetailLeftWrapper = styled.div`
    width: 30%;
    @media ${device.mobileL}{
        width: 100%;
    }
    .img_product-detail{
    width: 100%;
   height: 300px;
    }
`