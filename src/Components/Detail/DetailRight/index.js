import React from "react";
import {Link} from 'react-router-dom'
import {DetailRightWrapper} from './style'

const DetailRight = () => {
    return (
        <DetailRightWrapper>
            <div className="address-product">
                    <h3>
                        <span>Đang còn hàng tại:</span>
                        <span>(Bấm xem dẫn đường)</span>
                    </h3>
                    <ul className="list_address-product">
                        <li className="item_address-product">
                            <Link to=''>- Số 15 Xã Đàn, Q.Đống Đa, HN</Link>
                        </li>
                        <li className="item_address-product">
                            <Link to=''>- Số 134 Thái Hà, Q.Đống Đa, HN</Link>
                        </li>
                        <li className="item_address-product">
                            <Link to=''>- Số 152 Trần Duy Hưng, Q.Cầu Giấy, HN</Link>
                        </li>
                        <li className="item_address-product">
                            <Link to=''>- Số 141 Phạm Văn Đồng, Q.Cầu Giấy, HN</Link>
                        </li>
                        <li className="item_address-product">
                            <Link to=''>- Số 63 Nguyễn Hoàng, Q.Nam Từ Liêm, HN</Link>
                        </li>
                        <li className="item_address-product">
                            <Link to=''>- Số 89 Lê Duẩn, Q. Hoàn Kiếm, HN</Link>
                        </li>
                    </ul>
                </div>
                <div className="policy_commitment-product">
                    <h3 className="title_policy-commitment">
                        Phúc Anh cam kết
                    </h3>
                    <ul className="list_policy-commitment">
                        <li className="item_policy-commitment">
                            <span>
                                <img src="/assets/image/icon_star_list2.png" alt="anh" />
                            </span>
                            <span>100% sản phẩm chính hãng</span>
                        </li>
                        <li className="item_policy-commitment">
                            <span>
                                <img src="/assets/image/icon_star_list2.png" alt="anh" />
                            </span>
                            <span>100% giá cạnh tranh so với thị trường</span>
                        </li>
                    </ul>
                    <h3 className="title_policy-commitment">
                        Chính sách bán hàng và bảo hành
                    </h3>
                    <ul className="list_policy-commitment">
                        <li className="item_policy-commitment">
                            <span>
                                <img src="/assets/image/icon_star_list2.png" alt="#" />
                            </span>
                            <span>Mua hàng trả góp lãi suất 0% Chi tiết</span>
                        </li>
                        <li className="item_policy-commitment">
                            <span>
                                <img src="/assets/image/icon_star_list2.png" alt="#" />
                            </span>
                            <span>Giao hàng nhanh 2h và miễn phí giao hàng từ 500.000đ Chi tiết</span>
                        </li>
                        <li className="item_policy-commitment">
                            <span>
                                <img src="/assets/image/icon_star_list2.png" alt="#" />
                            </span>
                            <span>Ưu đãi vàng dành cho khách hàng doanh nghiệp Chi tiết</span>
                        </li>
                        <li className="item_policy-commitment">
                            <span>
                                <img src="/assets/image/icon_star_list2.png" alt="#" />
                            </span>
                            <span>Đổi mới sản phẩm đến 30 ngày Chi tiết</span>
                        </li>
                        <li className="item_policy-commitment">
                            <span>
                                <img src="/assets/image/icon_star_list2.png" alt="#" />
                            </span>
                            <span>Dịch vụ bảo hành chuyên nghiệp, uy tín Chi tiết</span>
                        </li>
                    </ul>
                </div>
        </DetailRightWrapper>
    )
}

export default DetailRight