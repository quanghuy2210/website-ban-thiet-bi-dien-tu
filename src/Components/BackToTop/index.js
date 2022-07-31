import React from "react";
import ScrollButton from "react-scroll-button";

const BackToTop = () => {
    return (
      <ScrollButton
         targetId='to-top'
         behavior='smooth'
         buttonBackgroundColor='#e00'
         iconType='arrow-up'
         style={{ fontSize: '24px' }}
         scrollSpeed='1s'
      />
    )
}

export default BackToTop