import styled from "styled-components";

export const SliderNavWrapper = styled.div`
  width: 100%;
  border: 1px solid #ddd;
  .carousel {
    .slider-wrapper{
        padding: 10px;
        width: 100%;
        height: 300px;
        .slider .slide .image img{
        display: block;
        height: 300px;
       }
      }
      .control-arrow, .carousel-status, .control-dots{
        display: none;
      }
      
      .thumbs {
        .thumb{
            padding: 5px;
            border: 2px solid #ddd;
            width: 56px !important;
            height: 60px !important;
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        .selected{
            border: 2px solid #e00;
        }
      }
      
  }

`