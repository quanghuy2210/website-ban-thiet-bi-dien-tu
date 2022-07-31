import styled from "styled-components";
import {device} from '../../../contants'

export const ListHeaderTopWrapper = styled.div`

   padding: 10px 75px;
    display: flex;
    background-color: #365899;
    justify-content: space-between;
    @media ${device.tablet}{
    padding: 10px;
   }
   @media ${device.mobileL}{
    padding: 5px;
   }
   ul{
    display: flex;
    justify-content: space-between;
    &:first-child{
      width: 78%;
    }
    &:last-child{
      padding-left: 20px;
      width: 22%;
    }
  }
  .item-header-top{
    @media ${device.tablet}{
    padding: 0 3px;
  }
}
.item-header-top:first-child{
    padding-right: 8px;
    border-right: 2px solid #fff;
    @media ${device.tablet}{
    border: none;
    padding: 0;
  }
}
.item-header-top a{
    color: #fff;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
}
.item-header-top svg{
    margin-right: 5px;
    width: 18px;
    height: 18px;
    fill: #fff;
}
.login .item-header-top:first-child{
    padding-right: 0px;
    border: none;
}

`