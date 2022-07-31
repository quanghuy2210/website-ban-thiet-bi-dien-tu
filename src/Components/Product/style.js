import styled from 'styled-components'
import {device} from '../../contants'

export const ProductWrapper = styled.div`
   padding: 10px 75px;
    width: 100%;
    height: auto;
    @media ${device.tablet}{
        padding: 10px;
    }
    @media ${device.mobileL}{
        padding: 5px;
    }
`