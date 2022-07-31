import React,{useEffect} from "react";
import {PageNewsWrapper} from './style'

const PageNews = () =>{
    useEffect(() => {
        document.title = "Tin tức"
      }, [])
    return (
        <PageNewsWrapper>
            <ul className="list-news">
                <li className="item-news">
                    <a href="">TIN CÔNG NGHỆ</a>
                </li>
                <li className="item-news">
                    <a href="">REVIEW</a>
                </li>
                <li className="item-news">
                    <a href="">TIN KHUYẾN MẠI</a>
                </li>
                <li className="item-news">
                    <a href="">TƯ VẤN - MẸO VẶT</a>
                </li>
                <li className="item-news">
                    <a href="">TIN CÔNG TY</a>
                </li>
                <li className="item-news">
                    <a href="">TIN TUYỂN DỤNG</a>
                </li>
            </ul>
            <div className="recruit">
                <div className="recruit-left">
                    <a href="">
                        <img className="image-recruit" src="/assets/image/tin-tuc/7618_anh_tuyen_dung.jpg" alt="" />
                        <div className="coating"></div>
                        <div className="content-recruit">
                            <h2>PHÚC ANH TUYỂN DỤNG</h2>
                            <span className="time">
                                10/05/2022, 8:00 am
                            </span>
                        </div>
                    </a>
                </div>
                <div className="recruit-right">
                    <div className="wrapper_recruit-right">
                        <a href="">
                            <img className="image-recruit" src="/assets/image/tin-tuc/8216_7546_truong_nhom_seo___content.jpg"
                                alt="" />
                            <div className="coating"></div>
                            <div className="content-recruit">
                                <h2>TUYỂN NHÂN VIÊN KINH DOANH - PHÒNG DỰ ÁN</h2>
                                <span className="time">
                                    10/05/2022, 8:00 am
                                </span>
                            </div>
                        </a>
                    </div>
                    <div className="wrapper_recruit-right">
                        <a href="">
                            <img className="image-recruit" src="/assets/image/tin-tuc/8074_images.jpg" alt="" />
                            <div className="coating"></div>
                            <div className="content-recruit">
                                <h2>TUYỂN DỤNG: NHÂN VIÊN KỸ THUẬT SỬA CHỮA PHẦN CỨNG</h2>
                                <span className="time">
                                    10/05/2022, 8:00 am
                                </span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="list-posts">
                <div className="list_posts-left">
                    <div className="wrapper-post">
                        <a className="title-post" href="">
                            <h2>TIN CÔNG NGHỆ</h2>
                        </a>
                        <div className="content-post">
                            <div className="content_post-left">
                                <a href="">
                                    <div className="image-post">
                                        <img src="/assets/image/tin-tuc/9894_laptop_duoi_10_trieu_dang_mua_ha1.jpg" alt="" />
                                    </div>
                                    <h3>
                                        [Tư vấn] Laptop giá rẻ dưới 10 triệu đáng mua nhất
                                    </h3>
                                    <span>10/05/2022, 8:00 am</span>
                                </a>
                            </div>
                            <ul className="list_content-post_right">
                                <li className="item_post-right">
                                    <a href="">
                                        <div className="image_item-post">
                                            <img src="/assets/image/tin-tuc/120_9950_0505202216.jpg" alt="" />
                                        </div>
                                        <div className="title_item-post">
                                            <h3>
                                                [REVIEW] Hp Envy X360 13 và Hp EliteBook X360 1030 g8 tại sao lại có mức
                                                giá chênh nhau đến vậy?
                                            </h3>
                                            <span>10/05/2022, 8:00 am</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="item_post-right">
                                    <a href="">
                                        <div className="image_item-post">
                                            <img src="/assets/image/tin-tuc/120_9743_img_1360.jpg" alt="" />
                                        </div>
                                        <div className="title_item-post">
                                            <h3>
                                                [Review] Top 3 chiếc laptop gaming tốt nhất trong phân khúc 25 triệu
                                                đồng nửa đầu năm 2022
                                            </h3>
                                            <span>10/05/2022, 8:00 am</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="item_post-right">
                                    <a href="">
                                        <div className="image_item-post">
                                            <img src="/assets/image/tin-tuc/120_9674_805750_1213_2_banner__result_hpmoen16_1.png"
                                                alt="" />
                                        </div>
                                        <div className="title_item-post">
                                            <h3>
                                                [Tư vấn] Phân vân cấu hình chiến GOD OF WAR PC FullHD - Việc gì khó, có
                                                Phúc Anh lo
                                            </h3>
                                            <span>10/05/2022, 8:00 am</span>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="wrapper-post">
                        <a className="title-post" href="">
                            <h2>REVIEW</h2>
                        </a>
                        <div className="content-post">
                            <div className="content_post-left">
                                <a href="">
                                    <div className="image-post">
                                        <img src="/assets/image/tin-tuc/120_9950_0505202216.jpg" alt="" />
                                    </div>
                                    <h3>
                                        [REVIEW] Hp Envy X360 13 và Hp EliteBook X360 1030 g8 tại sao lại có mức giá
                                        chênh nhau đến vậy?
                                    </h3>
                                    <span>10/05/2022, 8:00 am</span>
                                </a>
                            </div>
                            <ul className="list_content-post_right">
                                <li className="item_post-right">
                                    <a href="">
                                        <div className="image_item-post">
                                            <img src="/assets/image/tin-tuc/120_9812_g413_se__b__n_ph__m_c___gaming_gi___r_________n_t____logitech__1.jpg"
                                                alt="" />
                                        </div>
                                        <div className="title_item-post">
                                            <h3>
                                                [Review] G413 SE- Bàn phím cơ gaming giá rẻ đến từ Logitech
                                            </h3>
                                            <span>10/05/2022, 8:00 am</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="item_post-right">
                                    <a href="">
                                        <div className="image_item-post">
                                            <img src="/assets/image/tin-tuc/120_9811_review_ssd_kioxia_exceria_pro_1.jpg"
                                                alt="" />
                                        </div>
                                        <div className="title_item-post">
                                            <h3>
                                                Đánh giá SSD KIOXIA EXCERIA PRO - Khẳng định sức mạnh công nghệ Nhật Bản
                                            </h3>
                                            <span>10/05/2022, 8:00 am</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="item_post-right">
                                    <a href="">
                                        <div className="image_item-post">
                                            <img src="/assets/image/tin-tuc/120_9743_img_1360.jpg" alt="" />
                                        </div>
                                        <div className="title_item-post">
                                            <h3>
                                                [Review] Top 3 chiếc laptop gaming tốt nhất trong phân khúc 25 triệu
                                                đồng nửa đầu năm 2022
                                            </h3>
                                            <span>10/05/2022, 8:00 am</span>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="wrapper-post">
                        <a className="title-post" href="">
                            <h2>TIN KHUYẾN MẠI</h2>
                        </a>
                        <div className="content-post">
                            <div className="content_post-left">
                                <a href="">
                                    <div className="image-post">
                                        <img src="/assets/image/tin-tuc/9990_km_gia_soc_cuoi_tuan_14_5_2022.jpg" alt="" />
                                    </div>
                                    <h3>
                                        HOT!!! Giá SỐC cuối tuần - Giảm tới 50%++
                                    </h3>
                                    <span>10/05/2022, 8:00 am</span>
                                </a>
                            </div>
                            <ul className="list_content-post_right">
                                <li className="item_post-right">
                                    <a href="">
                                        <div className="image_item-post">
                                            <img src="/assets/image/tin-tuc/120_9959_km_laptop_t5_2022_s2.jpg" alt="" />
                                        </div>
                                        <div className="title_item-post">
                                            <h3>
                                                [Khuyến mại] Mừng sinh nhật bạn - Giảm không giới hạn
                                            </h3>
                                            <span>10/05/2022, 8:00 am</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="item_post-right">
                                    <a href="">
                                        <div className="image_item-post">
                                            <img src="/assets/image/tin-tuc/120_9352_km_laptop_gaming_t5_2022_h1.jpg" alt="" />
                                        </div>
                                        <div className="title_item-post">
                                            <h3>
                                                [Khuyến mại] Chơi game đỉnh - Rủng rỉnh quà
                                            </h3>
                                            <span>10/05/2022, 8:00 am</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="item_post-right">
                                    <a href="">
                                        <div className="image_item-post">
                                            <img src="/assets/image/tin-tuc/120_8774_km_build_pc_t5_2022_h1.jpg" alt="" />
                                        </div>
                                        <div className="title_item-post">
                                            <h3>
                                                [Khuyến mại] Lắp máy siêu chất - Nhận ngay quà khủng
                                            </h3>
                                            <span>10/05/2022, 8:00 am</span>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="wrapper-post">
                        <a className="title-post" href="">
                            <h2>TƯ VẤN - MẸO VẶT</h2>
                        </a>
                        <div className="content-post">
                            <div className="content_post-left">
                                <a href="">
                                    <div className="image-post">
                                        <img src="/assets/image/tin-tuc/9894_laptop_duoi_10_trieu_dang_mua_ha1.jpg" alt="" />
                                    </div>
                                    <h3>
                                        [Tư vấn] Laptop giá rẻ dưới 10 triệu đáng mua nhất
                                    </h3>
                                    <span>10/05/2022, 8:00 am</span>
                                </a>
                            </div>
                            <ul className="list_content-post_right">
                                <li className="item_post-right">
                                    <a href="">
                                        <div className="image_item-post">
                                            <img src="/assets/image/tin-tuc/120_9310_ios_15.jpg" alt="" />
                                        </div>
                                        <div className="title_item-post">
                                            <h3>
                                                [TƯ VẤN] 3 LÝ DO NÊN UPDATE iOS 15 NGAY VÀ LUÔN
                                            </h3>
                                            <span>10/05/2022, 8:00 am</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="item_post-right">
                                    <a href="">
                                        <div className="image_item-post">
                                            <img src="/assets/image/tin-tuc/120_8843_0cb913ada621537f0a30.jpg" alt="" />
                                        </div>
                                        <div className="title_item-post">
                                            <h3>
                                                [THỦ THUẬT] DỌN DẸP FILE THỪA, FILE RÁC TRỰC TIẾP TRÊN WINDOWS 10 KHÔNG
                                                CẦN PHẦN MỀM
                                            </h3>
                                            <span>10/05/2022, 8:00 am</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="item_post-right">
                                    <a href="">
                                        <div className="image_item-post">
                                            <img src="/assets/image/tin-tuc/120_9974_b___n_c___th_________b____hack_t__i_kho___n_instagram_m___kh__ng_hay_bi___t_c___nh_b__o_2_d___u_hi___u_c___n_ch______tr__n_ig__h3.jpg"
                                                alt="" />
                                        </div>
                                        <div className="title_item-post">
                                            <h3>
                                                [Tin tức] Bạn có thể đã bị hack tài khoản Instagram
                                            </h3>
                                            <span>10/05/2022, 8:00 am</span>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="wrapper-post">
                        <a className="title-post" href="">
                            <h2>TIN CÔNG TY</h2>
                        </a>
                        <div className="content-post">
                            <div className="content_post-left">
                                <a href="">
                                    <div className="image-post">
                                        <img src="/assets/image/tin-tuc/7618_anh_tuyen_dung.jpg" alt="" />
                                    </div>
                                    <h3>
                                        PHÚC ANH TUYỂN DỤNG
                                    </h3>
                                    <span>10/05/2022, 8:00 am</span>
                                </a>
                            </div>
                            <ul className="list_content-post_right">
                                <li className="item_post-right">
                                    <a href="">
                                        <div className="image_item-post">
                                            <img src="/assets/image/tin-tuc/120_8316_t___i_xu___ng.png" alt="" />
                                        </div>
                                        <div className="title_item-post">
                                            <h3>
                                                TUYỂN DỤNG TRƯỞNG PHÒNG MARKETING
                                            </h3>
                                            <span>10/05/2022, 8:00 am</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="item_post-right">
                                    <a href="">
                                        <div className="image_item-post">
                                            <img src="/assets/image/tin-tuc/120_8118_atto_visa_kinh_doanh_tai_nhat_1.jpg"
                                                alt="" />
                                        </div>
                                        <div className="title_item-post">
                                            <h3>
                                                TUYỂN DỤNG NHÂN VIÊN KINH DOANH PHÂN PHỐI
                                            </h3>
                                            <span>10/05/2022, 8:00 am</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="item_post-right">
                                    <a href="">
                                        <div className="image_item-post">
                                            <img src="/assets/image/tin-tuc/120_9876_imgl0024.jpg" alt="" />
                                        </div>
                                        <div className="title_item-post">
                                            <h3>
                                                TUYỂN DỤNG: NHÂN VIÊN BẢO TRÌ, BẢO DƯỠNG THIẾT BỊ
                                            </h3>
                                            <span>10/05/2022, 8:00 am</span>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="wrapper-post">
                        <a className="title-post" href="">
                            <h2>TIN TUYỂN DỤNG</h2>
                        </a>
                        <div className="content-post">
                            <div className="content_post-left">
                                <a href="">
                                    <div className="image-post">
                                        <img src="/assets/image/tin-tuc/7618_anh_tuyen_dung.jpg" alt="" />
                                    </div>
                                    <h3>
                                        PHÚC ANH TUYỂN DỤNG
                                    </h3>
                                    <span>10/05/2022, 8:00 am</span>
                                </a>
                            </div>
                            <ul className="list_content-post_right">
                                <li className="item_post-right">
                                    <a href="">
                                        <div className="image_item-post">
                                            <img src="/assets/image/tin-tuc/120_8316_t___i_xu___ng.png" alt="" />
                                        </div>
                                        <div className="title_item-post">
                                            <h3>
                                                TUYỂN DỤNG TRƯỞNG PHÒNG MARKETING
                                            </h3>
                                            <span>10/05/2022, 8:00 am</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="item_post-right">
                                    <a href="">
                                        <div className="image_item-post">
                                            <img src="/assets/image/tin-tuc/120_8118_atto_visa_kinh_doanh_tai_nhat_1.jpg"
                                                alt="" />
                                        </div>
                                        <div className="title_item-post">
                                            <h3>
                                                TUYỂN DỤNG NHÂN VIÊN KINH DOANH PHÂN PHỐI
                                            </h3>
                                            <span>10/05/2022, 8:00 am</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="item_post-right">
                                    <a href="">
                                        <div className="image_item-post">
                                            <img src="/assets/image/tin-tuc/120_9876_imgl0024.jpg" alt="" />
                                        </div>
                                        <div className="title_item-post">
                                            <h3>
                                                TUYỂN DỤNG: NHÂN VIÊN BẢO TRÌ, BẢO DƯỠNG THIẾT BỊ
                                            </h3>
                                            <span>10/05/2022, 8:00 am</span>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="list_posts-right">
                    <div className="wrapper-post">
                        <a className="title-post" href="">
                            <h2>TIN MỚI NHẤT</h2>
                        </a>
                        <div className="content-post content_posts-right">
                            <div className="content_post-left">
                                <a href="">
                                    <div className="image-post">
                                        <img src="/assets/image/tin-tuc/7618_anh_tuyen_dung.jpg" alt="" />
                                    </div>
                                    <h3>
                                        PHÚC ANH TUYỂN DỤNG
                                    </h3>
                                    <span>10/05/2022, 8:00 am</span>
                                </a>
                            </div>
                            <ul className="list_content-post_right">
                                <li className="item_post-right">
                                    <a href="">
                                        <div className="image_item-post">
                                            <img src="/assets/image/tin-tuc/120_8316_t___i_xu___ng.png" alt="" />
                                        </div>
                                        <div className="title_item-post">
                                            <h3>
                                                TUYỂN DỤNG TRƯỞNG PHÒNG MARKETING
                                            </h3>
                                            <span>10/05/2022, 8:00 am</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="item_post-right">
                                    <a href="">
                                        <div className="image_item-post">
                                            <img src="/assets/image/tin-tuc/120_8118_atto_visa_kinh_doanh_tai_nhat_1.jpg"
                                                alt="" />
                                        </div>
                                        <div className="title_item-post">
                                            <h3>
                                                TUYỂN DỤNG NHÂN VIÊN KINH DOANH PHÂN PHỐI
                                            </h3>
                                            <span>10/05/2022, 8:00 am</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="item_post-right">
                                    <a href="">
                                        <div className="image_item-post">
                                            <img src="/assets/image/tin-tuc/120_9876_imgl0024.jpg" alt="" />
                                        </div>
                                        <div className="title_item-post">
                                            <h3>
                                                TUYỂN DỤNG: NHÂN VIÊN BẢO TRÌ, BẢO DƯỠNG THIẾT BỊ
                                            </h3>
                                            <span>10/05/2022, 8:00 am</span>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="wrapper-post">
                        <a className="title-post" href="">
                            <h2>BÀI VIẾT NHIỀU NGƯỜI XEM</h2>
                        </a>
                        <ul className="list_most-view">
                            <li className="item_most-view">
                                <a href="">
                                    <h3>
                                        PHÚC ANH TUYỂN DỤNG
                                    </h3>
                                    <span>10/05/2022, 8:00 am</span>
                                </a>
                            </li>
                            <li className="item_most-view">
                                <a href="">
                                    <h3>
                                        TUYỂN NHÂN VIÊN KINH DOANH - PHÒNG DỰ ÁN
                                    </h3>
                                    <span>10/05/2022, 8:00 am</span>
                                </a>
                            </li>
                            <li className="item_most-view">
                                <a href="">
                                    <h3>
                                        TUYỂN DỤNG: NHÂN VIÊN KỸ THUẬT SỬA CHỮA PHẦN CỨNG
                                    </h3>
                                    <span>10/05/2022, 8:00 am</span>
                                </a>
                            </li>
                            <li className="item_most-view">
                                <a href="">
                                    <h3>
                                        TUYỂN DỤNG: NHÂN VIÊN TƯ VẤN BÁN HÀNG
                                    </h3>
                                    <span>10/05/2022, 8:00 am</span>
                                </a>
                            </li>
                            <li className="item_most-view">
                                <a href="">
                                    <h3>
                                        NHÂN VIÊN MARKETING TỔNG HỢP
                                    </h3>
                                    <span>10/05/2022, 8:00 am</span>
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </PageNewsWrapper>
    )
}

export default PageNews