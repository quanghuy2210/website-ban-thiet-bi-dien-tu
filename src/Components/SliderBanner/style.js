import styled from "styled-components";
import {device} from '../../contants'

export const SliderBannerWrapper = styled.div`
    width: 100%;
    padding: 0 75px;
    display: flex;
    @media ${device.tablet}{
        padding: 0 10px;
    }
    @media ${device.mobileL}{
        padding: 0;
        flex-direction: column-reverse;
    }
    .over-slider-image-banner{
        width: 60%;
        margin: 0 8px;
        @media ${device.tablet}{
          margin: 0 0 0 8px;
          width: 70%;
          
        }
        @media ${device.mobileL}{
          width: 100%;
          margin: 5px 0 0 0;
        }
        .carousel .slider-wrapper .slider .slide .image img{
             @media ${device.tablet}{
                height: 550px;
             }
             @media ${device.mobileL}{
                height: 40vh;
             }
          }
    }
`