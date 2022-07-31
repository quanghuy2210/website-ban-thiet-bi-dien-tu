import styled from "styled-components";
import {device} from '../../../contants'

export const ListMenuWrapper = styled.ul`
    flex-grow: 1;
    position: relative;
    list-style-type: none;
    border: 1px solid #e00;
    @media ${device.mobileL}{
        padding: 5px;
        display: flex;
        flex-wrap: wrap;
        border: none;
        justify-content: space-between;
    }

`