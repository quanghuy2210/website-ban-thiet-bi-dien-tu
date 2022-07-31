import styled from "styled-components";
import {device} from '../../../../contants'

export const MenuItemWrapper = styled.li`
    cursor: pointer;
    padding: 6px;
    border-bottom: 1px solid #ddd;
    text-decoration: none;
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    @media ${device.mobileL}{
        width: calc((100% - 10px) / 3);
        min-height: 3.5rem;
        margin-bottom: 5px;
        border: 1px solid #365899;
        border-radius: 3px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 4px;
    }
    a{
        color:  rgb(0 0 255);
        @media ${device.mobileL}{
            font-weight: 400;
            font-size: 1rem;
            color:  #000;
        }
    }
    svg{
       width: 20px ;
       height: 20px;
       margin-right: 5px;
       fill: #333;
       @media ${device.mobileL}{
        display: none;
    }
    }
    &:hover{
    background-color: #f7f7f7;
    .submenu-block{
        display: flex;
    }
}
`