import styled from "styled-components";
import { device} from '../../../../../contants'

export const ListInformationTopWrapper = styled.div`
   width: 75%;
   display: flex;
   justify-content: space-between;
   @media ${device.tablet}{
        width: 100%;
    }
`