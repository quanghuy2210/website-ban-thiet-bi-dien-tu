import styled from "styled-components";

export const SocialBarWrapper = styled.div`
   .social-bar-right{
    position: fixed;
    bottom: calc(50% - 100px);
    right: 10px;
    list-style-type: none;
    z-index: 99;
}
.item-social{
    margin-bottom: 5px;
}
.item-social a{
    display: inline-block;
    width: 33px;
    height: 33px;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.item-social a svg{
    width: 70%;
    height: 70%;
   fill: #fff;
}
.item-social:first-child a{
    background-color:#3b5998 ;
}
.item-social:nth-child(2) a{
    background-color:  #e00;
}
.item-social:nth-child(3) a{
    background-color: #ff7d0b;
}
.item-social:nth-child(4) a{
    background-color: #e00;
}
.item-social:nth-child(5) a{
    background-color: rgb(64, 102, 255);
}
.item-social:last-child a{
    background-color:#6a0002 ;
}
/* social-left */
.social-bar-left{
    position: fixed;
    top: 60%;
    left: 10px;
    list-style-type: none;
    z-index: 99;
}
.item-social-left{
    margin-bottom: 20px;
}
.item-social-left a{
    display: inline-block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    background-color: rgb(27, 99, 255);
    display: flex;
    align-items: center;
    justify-content: center;
}

.item-social-left:first-child a svg{
    width: 60%;
    height: 60%;
    fill: #fff;
}
.item-social-left:last-child a svg{
    width: 100%;
    height: 100%;
}
`