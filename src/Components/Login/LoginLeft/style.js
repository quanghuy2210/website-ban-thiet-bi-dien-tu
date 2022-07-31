import styled from "styled-components";
import {device} from '../../../contants'

export const LoginLeftWrapper = styled.div`
width: 50%;
margin-right: 20px;
@media ${device.mobileL}{
        width: 100%;
        margin-bottom: 20px;
    }
h2{
    margin-bottom: 10px;
    font-size: 1.2rem;
    color: rgb(88, 88, 88);
}
form{
    .over-input{
        label{
            min-width: 120px;
        }
    }
    .submit{
    padding-left: 120px;
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    .btn-DN{
        padding: 8px 12px;
        border-radius: 3px;
        background-color: #4267b2;
        border: none;
        color: #fff;
        font-size: 1.2rem;
    } 
    a{
    margin-left: 5px;
    font-size: 1.2rem;
    color: #333;
    @media ${device.mobileL}{
        font-size: 1rem;
    }
    }
}
}


.btn-login{
    margin-top: 10px;
    margin-right: 5px;
    display: inline-block;
    min-width:157px ;
    min-height: 30px;
    max-width:157px ;
    max-height: 30px;
    text-decoration: none;
}
.btn-login img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`