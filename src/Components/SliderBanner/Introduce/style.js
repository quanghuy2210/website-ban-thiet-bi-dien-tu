import styled from 'styled-components'
import {device} from '../../../contants'
export const IntroduceWrapper = styled.ul`
    width: 25%;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    @media ${device.tablet}{
        display: none;
    }
.item-introduce a{
    display: inline-block;
    width: 100%;
    height: 195px;
}
.item-introduce a iframe{
    width: 100%;
    height: 100%;
}
.item-introduce a img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`