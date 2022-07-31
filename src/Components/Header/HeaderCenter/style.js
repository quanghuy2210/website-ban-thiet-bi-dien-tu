import styled from 'styled-components'
import {device} from '../../../contants'

export const HeaderCenterWrapper = styled.div`
    padding: 15px 75px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media ${device.tablet}{
    padding: 10px;
    }
    .logo a{
     display: block;
     max-width: 208px;
     min-width: 208px;
     img{
       width: 100%;
       height: 100%;
       object-fit: cover;
     }
   }
.form-search form{
    display: flex;
    font-size: 1.2rem;
    .over-input {
        margin: 0;
        input{
           min-width: 26rem;
           border: 1px solid #e00;
           border-right: none;
           border-top-right-radius: 0 ;
           border-bottom-right-radius: 0;
           position: relative;
           @media ${device.tablet}{
               min-width: 16rem;
          }
           }
         label{
            min-width: 0;
           }
      }
    
   select{
        cursor: pointer;
        padding-right: 20px;
        border: none;
        border-top: 1px solid #e00;
        border-bottom: 1px solid #e00;
    }
    .button-search{
        cursor: pointer;
        padding: 5px;
        background-color: #e00;
        border: none;
        border-top-right-radius: 3px ;
        border-bottom-right-radius: 3px;
        a{
           color: #fff;
        }
    }
  }
.seach-time-mount{
    position: absolute;
    z-index: 99;
    max-height: 360px;
    max-width: 35rem;
    min-width: 35rem;
    overflow: auto;
    background-color: #fff;
    @media ${device.tablet}{
       max-width:30.5rem ;
       min-width:30.5rem ;
    }
    tr {
       cursor: pointer;
       border-bottom: 1px solid #ddd;
       border-right: 1px solid #ddd;
       border-left: 1px solid #ddd;
       .image_product-search{
         padding: 5px;
         width: 5rem;
         height: 5rem;
         img{
            width: 100%;
            height: 100%;
          }
        }
      .information_product-search{
           font-size: 1.1rem;
           h3{
              font-weight: 600;
            }
           span{
             color: #e00;
           }
        }
       
    }
    tr:hover {
       background: #B0D5F6;
   }   
}

 
.phone-purchase{
    color: #e00;
    @media ${device.tablet}{
    display: none;
    }
    span:first-child{
       font-size: 1.4rem;
   }  
   span:last-child{
      font-size: 2.2rem;
      font-weight: bold;
   }  
}
.cart{
    cursor: pointer;
    padding: 8px 12px;
    background-color: #e00;
    border-radius: 3px;
    a{
       display: flex;
       justify-content: space-between;
       align-items: center;
       font-size: 1.3rem;
       color: #fff;
       fill: #fff;
       text-decoration: none;
       svg{
          width: 20px;
          height: 20px;
        }
        span:nth-child(2){
              margin: 0 5px;
              font-weight: 500;
        }
        span:last-child{
          width: 20px;
          height: 20px;
         display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          color: #e00;
          background-color: #fff;
          font-weight: bold;
}
    }
} 
`