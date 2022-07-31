import React from "react";
import {Link} from 'react-router-dom'
import {DetailCenterWrapper} from './style'

const DetailCenter = ({product, hadleAddProduct,price}) => {
    return (
        <DetailCenterWrapper>
            <span className="view-product">Lượt xem: 22.703</span>
                <div className="price-product">
                    <span>{price.priceFirt} </span>
                    <div className="price-product-content">
                        <span> {price.priceLast} VNĐ </span>
                        <span>[Giá đã có VAT]</span>
                    </div>
                </div>
                <p className="para-policy">
                    Bảo hành: Chính hãng 12 tháng. Giao nhận tại nơi sử dụng. Đổi mới 30 ngày <br />
                    <span>Giao hàng tận nơi miễn phí theo chính sách vận chuyển</span> <Link to=''>(Xem chi
                        tiết)</Link>
                </p>
                <div className="btn-purchase">
                    <Link to='/cart' onClick={()=>hadleAddProduct(product)}>
                        <span>Mua ngay</span>
                        <span>Giao hàng tận nơi nhanh chóng</span>
                    </Link >
                    <Link to='' onClick={()=>hadleAddProduct(product)} >
                        <span>Cho vào giỏ</span>
                        <span>Mua tiếp sản phẩm khác</span>
                    </Link>
                    <Link to=''>
                        <span>Mua trả góp</span>
                        <span>từ 958.000 <sup>đ</sup>/th (12 tháng)</span>
                    </Link>
                </div>
                <ul className="list_endow-product">
                    <li className="item_endow-product">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            
                            <path
                                d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z" />
                        </svg>
                        <Link to=''>Giảm đến 368K cho học sinh, sinh viên</Link>
                    </li>
                    <li className="item_endow-product">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            
                            <path
                                d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z" />
                        </svg>
                        <Link to=''>Giảm tới 500.000đ, 20% ram laptop kèm bộ quà tới 3.000.000đ khi mua
                            Laptop Gaming</Link>
                    </li>
                    <li className="item_endow-product">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            
                            <path
                                d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z" />
                        </svg>
                        <Link to=''>Giảm tới 20% khi mua linh kiện, phụ kiện kèm laptop</Link>
                    </li>
                    <li className="item_endow-product">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            
                            <path
                                d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z" />
                        </svg>
                        <Link to=''>MUA DELL CỰC CHẤT - NHẬN QUÀ NGÂY NGẤT tặng TMH 300.000đ (Xem ngay)</Link>
                    </li>
                    <li className="item_endow-product">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            
                            <path
                                d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z" />
                        </svg>
                        <Link to=''>Giảm ngay 300.000đ cho khách hàng có sinh nhật tháng 4 khi mua
                            Laptop</Link>
                    </li>
                    <li className="item_endow-product">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                           
                            <path
                                d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z" />
                        </svg>
                        <Link to=''>Khuyến mại siêu HOT: PC siêu chất - Rinh Gấp Quà To</Link>
                    </li>
                    <li className="item_endow-product">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            
                            <path
                                d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z" />
                        </svg>
                        <Link to=''> Ưu đãi giảm tới 600.000 VNĐ khi mua phần mềm Windows - Office - Diệt
                            virut</Link>
                    </li>
                    <li className="item_endow-product">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            
                            <path
                                d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z" />
                        </svg>
                        <Link to=''>Giảm tới 20% khi mua thiết bị văn phòng</Link>
                    </li>
                </ul>
                <div className="gift-product">
                    <h3 className="title_gift-product">Ưu đãi và quà tặng khuyến mãi:</h3>
                    <ul className="list-gift-product">
                        <li className="item_gift-product">
                            Từ ngày 1/4 đến 30/04/2022, Tặng:
                        </li>
                        <li className="item_gift-product">
                            - Chuột không dây
                        </li>
                        <li className="item_gift-product">
                            - Túi chống sốc Phúc Anh
                        </li>
                        <li className="item_gift-product">
                            - Balo Phúc Anh
                        </li>
                        <li className="item_gift-product">
                            - Công dịch vụ bảo trì bảo dưỡng laptop tại Phúc Anh
                        </li>
                        <li className="item_gift-product">
                            - Giảm 20% cặp or balo thời trang Targus, Tucano, WIWU, POSO… khi mua kèm laptop.
                        </li>
                        <li className="item_gift-product">
                            - Giảm 10% ram laptop, ổ cứng HDD laptop.
                        </li>
                        <li className="item_gift-product">
                            - Giảm 3% ổ cứng di động khi mua kèm laptop..
                        </li>

                    </ul>
                </div>
        </DetailCenterWrapper>
    )
}

export default DetailCenter