import styled from "styled-components";
import {device} from '../../../../../contants'

export const InformationCenterItemWrapper = styled.div`
   width: calc((100% - 60px) / 4);
   @media ${device.tablet}{
      width: calc((100% - 60px) / 3);
    }
   @media ${device.mobileL}{
    width: 100%;
   }
   .title-showroom{
    margin: 10px 0;
    font-size: 1.3rem;
    color: #fff;
    @media ${device.mobileL}{
    display: flex;
    justify-content: space-between;
    background-color: #e00;
    margin: 0;
    padding: 5px;
    border-bottom: 1px solid #fff;
    font-size: 1.1rem;
   }
}
.title-showroom span:first-child{
    font-weight: bold;
    @media ${device.mobileL}{
      font-weight: 500;
   }
}
.title-showroom span:last-child{
    display: none;
    @media ${device.mobileL}{
    display: block;
    font-weight: 500;
   }
}
.list-information-showroom{
    margin-bottom: 20px;
    font-size: 1.2rem;
    list-style-type: none;
    color: #fff;
    @media ${device.mobileL}{
    display: none;
   }
}
.item-showroom{
    margin-bottom: 3px;
}
`