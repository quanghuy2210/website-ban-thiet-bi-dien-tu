import styled from "styled-components";

export const ListMenuMobileWrapper = styled.ul`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    min-width: 60vw;
    list-style-type: none;
    background-color: #ddd;
    transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
    -moz-transform: translateX(-100%);
    -ms-transform: translateX(-100%);
    -o-transform: translateX(-100%);
    transition: 0.5s;
    -webkit-transition: 0.5s;
    -moz-transition: 0.5s;
    -ms-transition: 0.5s;
    -o-transition: 0.5s;
    .icon-close{
        padding: 5px;
        display: flex;
        justify-content: flex-end;
        svg{
            width: 20px;
            height: 20px;
        }
    }
    li{
        padding: 5px ;
    border-bottom: 1px solid #fff;
    &:hover{
        background-color: #999;
        transition: 0.1s;
        a{
            transition: 0.1s;
            color: #fff;
        }
    }
    a{
        font-size: 1.3rem;
        color: #000;
        &:hover{
            transition: 0.1s;
            color: #fff;
        }
    }
    }
`