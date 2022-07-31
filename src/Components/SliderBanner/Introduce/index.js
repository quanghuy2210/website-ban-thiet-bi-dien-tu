import React from 'react'
import {IntroduceWrapper} from './style'

const Introduce = () => {
    return (
        <IntroduceWrapper>
            <li className="item-introduce">
                        <a href="#">
                            <iframe src="https://www.youtube.com/embed/ap2-GLOJHkY" title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen>
                            </iframe>
                        </a>
                    </li>
                    <li className="item-introduce">
                        <a href="#">
                            <img src="/assets/image/trang-chu/Tuyendung_350x195copy.jpg" alt="anh" />
                        </a>
                    </li>
                    <li className="item-introduce">
                        <a href="#">
                            <img src="/assets/image/trang-chu/12_Oct579702eb66a569ac47e496cba555e382.jpg" alt="anh" />
                        </a>
                    </li>
        </IntroduceWrapper>
    )
}

export default Introduce