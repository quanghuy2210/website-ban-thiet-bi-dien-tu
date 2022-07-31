import styled from "styled-components";
import {device} from '../../../contants'

export const LoginRightWrapper = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    @media ${device.mobileL}{
        width: 100%;
    }
h2{
    font-size: 1.2rem;
    color: rgb(88, 88, 88);
}
 span{
    margin: 10px 0;
    font-size: 1.3rem;
}
 a{
    font-size: 1.3rem;
    font-weight: bold;
    text-decoration: none;
    color: rgb(1, 172, 241);

}
`