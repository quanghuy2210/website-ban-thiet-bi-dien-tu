import React from "react";
import { SliderBannerWrapper} from './style'
import ListMenu from "./ListMenu";
import SliderImageBanner  from "../SliderImageBanner";
import Introduce from "./Introduce";

const SliderBanner = ({listDataMenu,listImageSlider}) => {
     return (
         <SliderBannerWrapper>
             <ListMenu listDataMenu={listDataMenu} />
             <SliderImageBanner listImageSlider={listImageSlider} />
             <Introduce />
         </SliderBannerWrapper>
     )
}

export default SliderBanner