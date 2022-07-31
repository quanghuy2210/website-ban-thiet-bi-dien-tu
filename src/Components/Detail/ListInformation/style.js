import styled from "styled-components";
import {device} from '../../../contants'

export const ListInformationWrapper = styled.ul`
   display: flex;
   @media ${device.mobileL}{
    display: none;
   }
   .item-information{
    background-color: #eee;
    padding: 10px 15px;
    &:first-child a{
    color: #e00;
}
&:last-child{
    flex-grow: 1;
}
a{
    font-size: 1.4rem;
    text-decoration: none;
    color: #000;
}
}

`