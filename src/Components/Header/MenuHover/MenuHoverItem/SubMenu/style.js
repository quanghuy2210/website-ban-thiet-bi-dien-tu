import styled from "styled-components";

export const SubMenuWrapper = styled.div`
    width: calc(100vw - 100% - 168px);
    min-height: calc(100% + 2px);
    position: absolute;
    top: -1px;
    left: 100%;
    padding: 10px 0;
    border: 1px solid #dedede;
    display: flex;
    flex-wrap: wrap;
    background-color: #f7f7f7;
    z-index: 99;
    display: none;
`