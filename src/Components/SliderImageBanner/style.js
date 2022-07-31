import styled from "styled-components";
import {device} from '../../contants'

export const SliderImageBannerWrapper = styled.div`
   width: 100%;
   height: 100% !important;
   .carousel {
       .slider-wrapper .slider .slide .image img{
        display: block;
        height: 610px;
       }
      .control-arrow, .thumbs, .carousel-status  {
        display: none;
      }
   }
   .carousel:last-child{
    display: none;
   }
   .control-dots{
       @media ${device.mobileL}{
          margin: 0;
        }
       .dot{
        width: 0.9rem ;
        height: 0.9rem;
        background: #D6D6D6;
        opacity: 1;
        box-shadow: none;
        &:hover{
            background: #365899;
        }
        @media ${device.mobileL}{
          width: 0.6rem;
          height: 0.6rem;
          margin: 5px;
        }
       }
       .selected{
        transition: 0.3s;
        background: #365899;
        width: 30px;
        border-radius: 0.8rem;
        box-shadow: none;
        @media ${device.mobileL}{
          width: 2rem;
        }
       }
   }
 `