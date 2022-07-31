import styled from "styled-components";
import {device} from '../../../contants'

export const DetailRightWrapper = styled.div`
width: 25%;
@media ${device.mobileL}{
        width: 100%;
    }
.address-product{
    padding: 10px;
    border: 1px solid #fde303;
    h3{
    font-size: 1.4rem;
    color: #e00;
    display: flex;
    flex-direction: column;
}
.list_address-product .item_address-product{
    margin: 5px 0;
    a{
    font-size: 1.2rem;
    color: #000;
    text-decoration: none;
}
}
}
.policy_commitment-product{
    margin-top: 40px;
    padding: 10px;
    border: 1px solid #aaa;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    -o-border-radius: 3px;
    .title_policy-commitment{
    font-size: 1.4rem;
    color: #e00;
    text-align: center;
}
.list_policy-commitment{
    margin: 20px 0;
    .item_policy-commitment{
    margin: 10px 0;
    font-size: 1.3rem;
    display: flex;
    span:first-child{
    display: block;
    min-width: 20px;
    height: 20px;
    img{
    width: 100%;
    height: 100%;
    }
}
span:last-child{
    margin-left: 5px;
    line-height: 20px;
}
}
}
}
`