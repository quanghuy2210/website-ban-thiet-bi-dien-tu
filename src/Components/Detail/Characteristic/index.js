import React from "react";
import {Link} from 'react-router-dom'
import {CharacteristicWrapper} from './style'
import Title from '../../ComponentCommon/Title'

const Characteristic = ({title,image}) => {
    return (
        <CharacteristicWrapper>
            <Title name='ĐẶC ĐIỂM NỔI BẬT'/>
            <h2 className="title_product-detail">{title}</h2>
            <p className="para-characteristic">
                <span>{title}</span> là dòng laptop phù hợp với <Link to=''>nhu cầu học tập - văn
                    phòng</Link> với thiết kế mỏng nhẹ, hiện đại cùng hiệu năng mạnh mẽ giúp người dùng giải quyết
                mọi công việc.
            </p>
            <h3>Thiết kế mỏng nhẹ, hiện đại và di động</h3>
            <p className="para-characteristic">
                <span>{title}</span> sở hữu vẻ ngoài hiện đại và mỏng nhẹ với viền màn hình siêu mỏng chỉ
                6,5mm giúp kích thước tổng thể của laptop gọn gàng hơn rất nhiều. Bên cạnh đó, <span>HP
                    15s</span> có trọng lượng chỉ 1,74kg và độ mỏng 1,99cm, rất mỏng nhẹ, tiện lợi để bạn mang
                đi bất cứ đâu. Chiếc <Link to=''>laptop của HP</Link> cũng được thiết kế tuyệt đẹp với màu bạc thanh
                lịch, những đường nét tinh tế cao cấp, tạo nên một sản phẩm thời trang.
            </p>
            <div className="img-characteristic">
                <img src={image.src} alt={image.alt} />
            </div>
            <h3>Trải nghiệm giải trí sống động</h3>
            <p className="para-characteristic">
                <span>{title}</span> với <Link to=''>màn hình 15.6 inch</Link> mang lại không gian rộng và
                cung cấp hình ảnh có độ nét cao, cùng với công nghệ chống chói, giảm tình trạng lóa màn hình khi
                sử dụng ngoài trời nắng, chiếc máy sẽ đem đến cho bạn những khung hình đẹp để giải trí và làm
                việc một cách tốt nhất.
                <br />
                Phần loa được tích hợp phía trên bàn phím với công nghệ Realtek High Definition Audio cho âm
                thanh to rõ và trong. Màn hình cùng âm thanh chất lượng mang lại cho bạn trải nghiệm giải trí
                sống động nhất.
            </p>
            <div className="img-characteristic">
                <img src={image.src} alt={image.alt} />
            </div>
            <h3>Tận hưởng sự mượt mà của hiệu năng ổn định</h3>
            <p className="para-characteristic">
                <span>{title}</span> được trang bị hiệu năng ổn định nhờ <Link to=''>bộ vi xử lí
                    Intel Core i3</Link> thế hệ thứ 10, con chip được sản xuất trên tiến trình 10 nm SuperFin, xung
                nhịp tối đa 4.10 GHz giúp chạy mượt mà mọi ứng dụng nâng cao trong công việc văn phòng, học tập.
                <br />
                Đi cùng với đó là <Link to=''>4GB RAM</Link> DDR4 và <Link to=''>256GB ổ cứng SSD</Link>. Ổ cứng SSD
                đóng vai trò quan trọng trong việc tăng tốc toàn diện máy tính, khi cả tốc độ khởi động, mở ứng
                dụng lẫn truyền dữ liệu đều nhanh vượt trội. Bạn sẽ được tận hưởng một cấu hình lí tưởng khi sử
                dụng HP 15s.
            </p>
            <div className="img-characteristic">
                <img src={image.src} alt={image.alt} />
            </div>
        </CharacteristicWrapper>
    )
}
export default Characteristic