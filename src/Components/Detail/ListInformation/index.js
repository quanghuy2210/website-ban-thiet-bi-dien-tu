import React from "react";
import {ListInformationWrapper} from './style'

const ListInformation = () => {
    return (
        <ListInformationWrapper>
            <li className="item-information">
                <a href="parameter">Thông số kỹ thuật</a>
            </li>
            <li className="item-information">
                <a href="characteristic ">Đặc điểm nổi bật</a>
            </li>
            <li className="item-information">
                <a href="video">Video</a>
            </li>
            <li className="item-information">
                <a href="related">Sản phẩm giá tương đương</a>
            </li>
            <li className="item-information">
                <a href="#">Bình luận người dùng</a>
            </li>
            <li className="item-information">
                <a href="#">Đánh giá sản phẩm</a>
            </li>
        </ListInformationWrapper>
    )
}

export default ListInformation