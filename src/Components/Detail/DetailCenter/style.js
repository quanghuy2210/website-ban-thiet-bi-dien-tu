import styled from "styled-components";
import {device} from '../../../contants'

export const DetailCenterWrapper = styled.div`
    padding: 0 10px;
    width: 45%;
    display: flex;
    flex-direction: column;
    @media ${device.mobileL}{
        width: 100%;
    }
    .view-product{
    font-size: 1.3rem;
     }
     .price-product{
    margin: 10px 0 20px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    background-color: #f0f0f0;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    -o-border-radius: 3px;
    span:first-child{
    font-size: 1.3rem;
    }
    .price-product-content{
    margin-left: 60px;
    span:first-child{
    font-size: 1.6rem;
    font-weight: bold;
    }
    span:last-child{
    color: #888;
    }
    }
   }
   .para-policy{
    margin-bottom: 30px;
    font-size: 1.3rem;
    line-height: 20px;
    span{
    color: #e00;
}
a{
    text-decoration: none;
    color: blue;
    font-style: italic;

}
}
.btn-purchase{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    a{
    cursor: pointer;
    margin: 5px 0;
    padding: 10px;
    display: flex;
    flex-direction: column;
    border: none;
    align-items: center;
    color: #fff;
    span:first-child{
    margin-bottom: 5px;
    font-size: 1.6rem;
    font-weight: bold;
}
span:last-child{
    font-size: 1.3rem;
}
&:first-child{
    width: 100%;
    background: -webkit-linear-gradient(top, #ff3838 0%,#a80002 100%);
}
&:first-child:hover{
   background: linear-gradient(to bottom,#e40003 100%,#ff3838 0%);
   
}
&:nth-child(2), &:last-child{
    width: calc((100% - 10px) / 2);
    background: -webkit-linear-gradient(top, #3481bc 0%,#003cb5 100%);
}
&:nth-child(2):hover, &:last-child:hover{
    background: linear-gradient(to bottom,#003cb5 100%,#3481bc 0%);
}

}
}
.list_endow-product{
    padding: 10px 0;
    border-bottom: 1px solid #ddd;
    .item_endow-product{
    margin: 5px;
    display: flex;
    align-items: center;
    svg{
    min-width: 12px;
    height: 12px;
    fill: #d211a8;
}
a{
    margin-left: 5px;
    font-size: 1.2rem;
    text-decoration: none;
    color: #d211a8;
}
}
}
.gift-product{
    padding: 10px 0;
    .title_gift-product{
    margin-bottom: 10px;
    font-size: 1.4rem;
    color: #e00;

}
.list-gift-product{
    padding-left: 10px;
    font-size: 1.3rem;
    color: #056bad;
    .item_gift-product{
    margin: 5px 0;
}
}
}
`