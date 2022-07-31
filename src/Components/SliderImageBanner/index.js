import React from "react";
import {SliderImageBannerWrapper} from './style'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const SliderImageBanner = ({listImageSlider}) => {
    return (
      <SliderImageBannerWrapper className="over-slider-image-banner">
        <Carousel infiniteLoop autoPlay >
          {
            listImageSlider.map(item => {
              return (
                   <div key={item.id} className="image">
                        <img src={item.url} alt='anh' />
                   </div>
              )
            })
          }
        </Carousel>
      </SliderImageBannerWrapper>
    );
}

export default SliderImageBanner