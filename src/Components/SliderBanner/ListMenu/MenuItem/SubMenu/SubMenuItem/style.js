import styled from "styled-components";

export const SubMenuItemWrapper = styled.div`
    padding: 5px 10px 0;
    width: calc(100% / 4);
    .title-submenu{
        font-size: 16px;
        font-weight: bold;
        color: red;
    }
    .list-submenu{
        list-style-type: none;
        li{
            margin: 5px 0;
            font-size: 13px;
            color: #000;
            &:hover{
               color: red;
             }
        }
    }
`