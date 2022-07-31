import styled from "styled-components";
import {device} from '../../contants'

export const CategoryWrapper = styled.div`
   width: 100%;
   padding: 10px 75px;
   @media ${device.tablet}{
      padding: 10px;
   }
   @media ${device.mobileL}{
      padding: 5px;
   }
   .over-slider-image-banner .carousel .slider-wrapper .slider .slide .image img{
        display: block;
        height: 300px;
        @media ${device.tablet}{
          height: 220px;
        }
        @media ${device.mobileL}{
          height: 120px;
        }
      }
   .filter-category{
      display: flex;
      justify-content: space-between;
      margin: 20px 0;
      .active{
      background-color: #e00;
     }
     button {
      padding: 8px 20px;
      font-size: 1.3rem;
      border-radius: 1rem;
      border: none;
      font-weight: 500;
      color: #fff;
      background-color: #365899;
      @media ${device.tablet}{
         margin: 5px ;
      }
      @media ${device.mobileL}{
         padding: 4px 12px;
         font-size: 1.2rem;
      }
   }
     @media ${device.tablet}{
         flex-wrap: wrap;
         justify-content: left;
      }
   }
   .wrapper-content{
      display: flex;
   }
   .wrapper-filter{
      height: fit-content;
      margin-right: 8px;
      width: 20%;
      border: 1px solid #365899;
      font-size: 1.3rem;
      @media ${device.mobileL}{
         display: none;
      }
   }
   .wrapper-filter tr th{
      padding: 10px;
      text-align: left;
      background-color: #365899;
      color: #fff;
      font-size: 1.5rem;
   }
   .wrapper-filter tr td{
      padding: 10px;
      cursor: pointer;
      text-align: center;
      color: blue;
      &:hover{
      transition: 0.3s;
      background-color: #e00;
      color: #fff;
   }
   }
   
   .wrapper-filter-mobile{
      display: none;
      @media ${device.mobileL}{
         display: block;
         height: fit-content;
         margin-right: 8px;
         width: 25%;
         border: 1px solid #365899;
         font-size: 1.2rem;
        tr{
         border-bottom: 1px solid #ddd;
        }
         tr th{
        text-align: left;
        background-color: #365899;
        color: #fff;
        padding: 5px;
     }
        tr td{
         padding: 5px;
         cursor: pointer;
         color: blue;
         &:hover{
         transition: 0.3s;
         background-color: #e00;
         color: #fff;
       }
     }
      }
   }
`