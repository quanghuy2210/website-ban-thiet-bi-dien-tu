import styled from "styled-components";
import {device} from '../../../../contants'
export const InformationBottomWrapper = styled.div`
    padding: 10px 75px;
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    @media ${device.tablet}{
        padding: 5px 10px;
        text-align: center;
    }
    @media ${device.mobileL}{
        padding: 5px;
        
    }
`