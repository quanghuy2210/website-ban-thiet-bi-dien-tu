import React,{useState} from "react";
import {CartLeftWrapper} from './style'
import ListProductCart from './ListProductCart'

const CartLeft = ({listCart,handleIncrementProduct,handleDecrementProduct,handleDelete}) => {
    const total = () => {
        let total = 0
        listCart.forEach(item => {
            total = item.price.priceLast * item.quantity + total
        })
        return total
    }
    return (
        <CartLeftWrapper>
                      <ListProductCart listCart={listCart} handleIncrementProduct={handleIncrementProduct} handleDecrementProduct={handleDecrementProduct} handleDelete={handleDelete} />
                   
                        <div className="total-money">
                            <span>Tổng cộng:</span>
                            <span className="money"></span>
                            <span className="unit">{total()}VNĐ</span>
                        </div>
                        <div className="total-money">
                            <span>Mã giảm giả / Quà tặng:</span>
                            <form className="form-code" action="">
                                <input className="insert-code" type="text" name="" id="" placeholder="Nhập mã giảm giá" />
                                <input className="apply" type="submit" value="Áp dụng" />
                            </form>
                        </div>
                        <div className="total-money">
                            <span>Khuyến mãi khi sử dụng code:</span>
                            <span className="money">0</span>
                            <span className="unit">VNĐ</span>
                        </div>
                        <div className="total-money">
                            <span>Tổng giá trị đơn hàng:</span>
                            <span className="money">{total()}</span>
                            <span className="unit">VNĐ</span>
                        </div>
                        <div className="total-money">

                        </div>
                        <ul className="transfer-instructions">
                            <li>- Quý khách hàng thực hiện việc chuyển khoản qua ngân hàng tổng số tiền mua hàng, cước
                                vận chuyển vào tài khoản của Phúc Anh - ghi rõ nội dung nộp tiền là thanh toán
                                tiền mua cho công ty Phúc Anh.</li>
                            <li>- Quý khách chuyển tiền cho chúng tôi vào tài khoản sau đây:</li>
                            <li>Tên tài khoản: <span className="name-ct">CÔNG TY TNHH KỸ NGHỆ PHÚC ANH</span></li>
                            <li>Địa chỉ: số 15 Xã Đàn, phường Phương Liên, quận Đống Đa, Thành phố Hà Nội</li>
                            <li className="phone"><span>Điện thoại: 024 35737383</span><span>Fax: 024 35737347</span>
                            </li>
                        </ul>
                        <table className="table-parameter table-cart">
                            <tr>
                                <th>Tên ngân hàng</th>
                                <th>Địa chỉ</th>
                                <th>Số TK</th>
                            </tr>
                            <tr>
                                <td>Ngân hàng TMCP Đầu tư và phát triển Việt Nam - BIDV</td>
                                <td>Chi nhánh Đông Đô</td>
                                <td>1251.0000.080393</td>
                            </tr>
                            <tr>
                                <td>Ngân hàng TMCP Quân đội - MB Bank</td>
                                <td>Chi nhánh Hoàn Kiếm</td>
                                <td>067.11.000.32.009</td>
                            </tr>
                            <tr>
                                <td>Ngân hàng TMCP Kỹ thương Việt Nam - Techcombank</td>
                                <td>Trung tâm Giao dịch Hội Sở</td>
                                <td>191.2226.8888.011</td>
                            </tr>
                            <tr>
                                <td>Ngân hàng TMCP Ngoại thương Việt Nam - Vietcombank</td>
                                <td>Chi nhánh Hà Nội</td>
                                <td>0021.000.272.878</td>
                            </tr>
                        </table>
                        <span >Phúc Anh sẽ thực hiện giao dịch ngay sau khi nhận được tiền
                            chuyển khoản từ Quý khách.</span>
        </CartLeftWrapper>
    )
}

export default CartLeft