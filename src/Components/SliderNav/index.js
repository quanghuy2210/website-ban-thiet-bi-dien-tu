import React from "react";
import {SliderNavWrapper} from './style'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const SliderNav = ( {listImageDetail}) => {
    return (
      <SliderNavWrapper>
        <Carousel infiniteLoop autoPlay >
          {
            listImageDetail.map(item => {
              return (
                   <div key={item.id} className="image">
                        <img src={item.url} alt='anh detail' />
                   </div>
              )
            })
          }
        </Carousel>
      </SliderNavWrapper>
    );
}

export default SliderNav