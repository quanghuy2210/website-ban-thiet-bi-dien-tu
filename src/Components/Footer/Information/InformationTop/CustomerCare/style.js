import styled from "styled-components";
import {device} from '../../../../../contants'

export const CustomerCareWrapper = styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;
    @media ${device.tablet}{
        width: 100%;
    }
    .image-customer-care{
    min-width: 160px;
    max-width: 160px;
    min-height: 60px;
    max-height: 60px;
}
.image-customer-care img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.title-form{
    margin: 20px 0 10px;
    cursor: pointer;
    font-size: 1.3rem;
    font-weight: bold;

}
.form-footer-top{
    display: flex;
}
.form-footer-top .over-input{
    label{
        display: none;
    }
    input{
        width: 100%;
    }
    &:first-child input{
    padding: 5px;
    border: 1px solid #ccc;
    border-right: none;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    font-size: 1.1rem;
}
  &:last-child input{
    cursor: pointer;
    padding: 5px;
    font-size: 1.2rem;
    background-color: #056bad;
    color: #fff;
    font-weight: bold;
    border: none;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
}
}
`