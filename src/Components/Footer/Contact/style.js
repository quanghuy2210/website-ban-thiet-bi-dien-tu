import styled from "styled-components";
import {device} from '../../../contants'

export const ContactWrapper = styled.div`
    width: 100%;
    padding: 0 75px;
    @media ${device.tablet}{
        padding: 0 10px;
    }
    @media ${device.mobileL}{
        padding: 0 5px;
    }
.line{
    padding: 1px 0;
    border-top:1px solid #5275be ;
    border-bottom: 3px solid #5275be;
}
.content-contact{
    padding: 10px 0;
    display: flex;
    @media ${device.tablet}{
        flex-wrap: wrap;
    }
}
.facebook{
    width: 40%;
    @media ${device.mobileL}{
        width: 100%;
    }
}
.title-contact{
    padding: 10px 0;
    font-size: 1.4rem;
    color: #e00;
    font-weight: bold;
}
.facebook span{
    display: inline-block;
    width: 100%;
    max-height: 200px;
}
.facebook span iframe{
    width: 100%;
    height: 100%;
}
.switchboard{
    width: 60%;
    margin-left: 20px;
    @media ${device.tablet}{
        width: 100%;
        margin: 0;
    }
}
.list-hotline{
    padding: 5px;
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    border: 1px solid #ddd;
    font-size: 1.1rem;
}
.item-hotline{
    padding: 10px 0;
    width: 50%;
}
.title-hotline{
    margin-bottom: 5px;
    display: flex;
    align-items: center;
}
.title-hotline span:first-child{
    margin-right: 5px;
    display: flex;
    width: 18px;
    height: 18px;
    border: 1px solid #000;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    justify-content: center;
    align-items: center;
}
.title-hotline span:first-child svg{
    width: 60%;
}
.title-hotline span:last-child{
    font-weight: bold;
}
.content-hotline span{
    color: #e00;
    font-weight: bold;
}
`