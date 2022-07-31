import React from "react";
import {ParameterWrapper} from './style'
import Title from '../../ComponentCommon/Title'
const Parameter = ({title}) => {
    return (
        <ParameterWrapper>
        
            <Title name='THÔNG SỐ KỸ THUẬT'/>
            <table className="table-parameter">
                <tr>
                    <td>Sản phẩm</td>
                    <td> {title}</td>
                </tr>
                <tr>
                    <td>Tên Hãng</td>
                    <td>HP</td>
                </tr>
                <tr>
                    <td>Model</td>
                    <td>15s-du1105TU 2Z6L3PA</td>
                </tr>
                <tr>
                    <td>Bộ VXL</td>
                    <td>Core i3 10110U 2.1Ghz-4Mb</td>
                </tr>
                <tr>
                    <td>Cạc đồ họa</td>
                    <td>Intel Graphics UHD</td>
                </tr>
                <tr>
                    <td>Bộ nhớ</td>
                    <td>4Gb (DDR4-2666 SDRAM/ 2 slots)</td>
                </tr>
                <tr>
                    <td>Ổ cứng/ Ổ đĩa quang</td>
                    <td>256GB SSD M.2 NVMe</td>
                </tr>
                <tr>
                    <td>Màn hình</td>
                    <td>15.6Inch</td>
                </tr>
                <tr>
                    <td>Kết nối</td>
                    <td>802.11ac (1x1) Wi-Fi® and Bluetooth® 4.2 combo</td>
                </tr>
                <tr>
                    <td>Cổng giao tiếp</td>
                    <td>1 SuperSpeed USB Type-C® 5Gbps signaling rate; 2 SuperSpeed USB Type-A 5Gbps signaling
                        rate; 1 HDMI 1.4b; 1 RJ-45; 1 AC smart pin; 1 headphone/microphone combo</td>
                </tr>
                <tr>
                    <td>Webcam</td>
                    <td>Có</td>
                </tr>
                <tr>
                    <td>Nhận dạng vân tay</td>
                    <td>Không có</td>
                </tr>
                <tr>
                    <td>Nhận diện khuôn mặt</td>
                    <td>Không có</td>
                </tr>
                <tr>
                    <td>Tính năng khác</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Hệ điều hành</td>
                    <td>Windows 11 Home</td>
                </tr>
                <tr>
                    <td>Pin</td>
                    <td>3 cell</td>
                </tr>
                <tr>
                    <td>Kích thước</td>
                    <td>35.85 x 24.2 x 1.99 cm</td>
                </tr>
                <tr>
                    <td>Trọng lượng</td>
                    <td>1.74 kg</td>
                </tr>
                <tr>
                    <td>Màu sắc/ Chất liệu</td>
                    <td>Silver</td>
                </tr>
            </table></ParameterWrapper>
    )
}

export default Parameter