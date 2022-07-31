import styled from "styled-components";

export const MenuHoverItemWrapper = styled.li`
    cursor: pointer;
    padding: 6px;
    border-bottom: 1px solid #ddd;
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    a{
        color:  rgb(0 0 255);
    }
    &:hover{
    background-color: #f7f7f7;
    .submenu-block{
        display: flex;
    }
}
`