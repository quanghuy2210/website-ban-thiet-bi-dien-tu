import styled from "styled-components";
import {device} from '../../../../contants'

export const InformationTopWrapper = styled.div`
padding: 0 75px;
display: flex;
@media ${device.tablet}{
        padding:0 10px;
        flex-wrap: wrap;
}
@media ${device.mobileL}{
        padding:0 5px;
}
`