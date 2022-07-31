import styled from "styled-components";
import {device} from '../../../contants'

export const HeaderBottomWrapper = styled.div`
   padding: 10px 75px;
   @media ${device.tablet}{
    padding: 10px;
    }

.list-header-bottom{
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    -o-border-radius: 3px;
    background-color: #365899;
}
.item-header-bottom:first-child{
    position: relative;
}

.item-header-bottom {
    cursor: pointer;
    color: #f5f200;
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    span{
        font-weight: 500;
    }
    @media ${device.tablet}{
    font-size: 1.2rem;
    padding: 5px 0;
    
    }
}
.item-header-bottom svg{
    width: 24px;
    height: 24px;
    margin-right: 5px;
    fill: #f5f200;
    @media ${device.tablet}{
      width: 16px;
      height: 16px;
    }
}
.item-header-bottom:first-child {
    padding-left: 10px;
    color: #fff;
    font-size: 1.3rem;
}
.item-header-bottom:first-child svg{
    fill: #fff;
}
.item-header-bottom:last-child {
    padding-right:10px;
    font-size: 1.3rem;
    min-height: 40px;
    background: #e62829;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    .slash{
      border-top: 40px solid #e62829;
      border-left: 40px solid #365899;
      height: 0;
      width: 40px;
   }
    @media ${device.tablet}{
    display: none;
    }
}

`