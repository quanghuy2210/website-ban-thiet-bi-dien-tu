import React from "react";
import {ContactWrapper} from './style'

const Contact = () => {
    return (
        <ContactWrapper>
            <div className="line"></div>
            <div className="content-contact">
                <div className="facebook">
                    <h2 className="title-contact">
                        ĐỊA CHỈ
                    </h2>
                    <span>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.737295674197!2d105.84557421420153!3d21.00316519402917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac742d3b83df%3A0x28772da31fb145b1!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIG5naOG7gSBCw6FjaCBLaG9hIEjDoCBO4buZaQ!5e0!3m2!1svi!2s!4v1650354157599!5m2!1svi!2s"
                            width="600" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </span>
                </div>
                <div className="switchboard">
                    <h2 className="title-contact">
                        TỔNG ĐÀI HỖ TRỢ
                    </h2>
                    <ul className="list-hotline">
                        <li className="item-hotline">
                            <div className="title-hotline">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path
                                            d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z">
                                        </path>
                                    </svg>
                                </span>
                                <span>
                                    Bán hàng trực tuyến:
                                </span>
                            </div>
                            <span className="content-hotline">
                                <span>1900 2164</span> - Nhánh số 1 (8h15- 20h30)
                            </span>
                        </li>
                        <li className="item-hotline">
                            <div className="title-hotline">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path
                                            d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z">
                                        </path>
                                    </svg>
                                </span>
                                <span>
                                    Hỗ trợ kỹ thuật:
                                </span>
                            </div>
                            <span className="content-hotline">
                                <span>1900 2165</span> (8h15- 17h15, Thứ 2- Thứ 7)
                            </span>
                        </li>
                        <li className="item-hotline">
                            <div className="title-hotline">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path
                                            d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z">
                                        </path>
                                    </svg>
                                </span>
                                <span>
                                    Bán hàng dự án và doanh nghiệp:
                                </span>
                            </div>
                            <span className="content-hotline">
                                <span>1900 2164</span> - Nhánh số 2 (8h15- 17h15, Thứ 2- Thứ 7)
                            </span>
                        </li>
                        <li className="item-hotline">
                            <div className="title-hotline">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path
                                            d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z">
                                        </path>
                                    </svg>
                                </span>
                                <span>
                                    Tra cứu bảo hành- Yêu cầu dịch vụ:
                                </span>
                            </div>
                            <span className="content-hotline">
                                <span>1900 2173</span> (8h15-17h15, Thứ 2- Thứ 7)
                            </span>
                        </li>
                        <li className="item-hotline">
                            <div className="title-hotline">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path
                                            d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z">
                                        </path>
                                    </svg>
                                </span>
                                <span>
                                    Tư vấn mua trả góp:
                                </span>
                            </div>
                            <span className="content-hotline">
                                <span>1900 2164</span> - Nhánh số 3 (8h15- 20h30)
                            </span>
                        </li>
                        <li className="item-hotline">
                            <div className="title-hotline">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path
                                            d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z">
                                        </path>
                                    </svg>
                                </span>
                                <span>
                                    Góp ý, khiếu nại:
                                </span>
                            </div>
                            <span className="content-hotline">
                                <span>1900 2174</span> (8h15-20h)
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="line"></div>
        </ContactWrapper>
    )
}
export default Contact