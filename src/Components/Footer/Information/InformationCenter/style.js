import styled from "styled-components";
import {device} from '../../../../contants'

export const InformationCenterWrapper = styled.div`
   padding: 10px 75px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    background-color: #4471c2;
    @media ${device.tablet}{
        padding:0 10px;
        flex-wrap: wrap;
}
    @media ${device.mobileL} {
        padding: 5px;
        background-color: #fff;
    }
`