import styled from "styled-components";
import {device} from '../../../contants'

export const PromotionItemWrapper = styled.div`
    cursor: pointer;
    padding: 10px;
    width: calc(100% / 3);
    border: 1px solid #ddd;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media ${device.mobileL}{
    width: calc(100% / 2);
   }
    &:hover{
    border: 1px solid #e00;
   }
   .img-promotion{
    width: 100%;
    min-height: 200px;
    max-height: 200px;
    @media ${device.mobileL}{
        min-height: 120px;
        max-height: 120px;
   }
    img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    }
}
.title-promotion{
    margin: 10px 0 20px;
    font-size: 1.3rem;
    color: #004B91;
    font-weight: 600;
    text-align: center;
    &:hover{
    color: #00AEFF;
    text-decoration: underline;
}
}

span{
    color: #e00;
    font-size: 1.1rem;
    font-style: italic;
}
`