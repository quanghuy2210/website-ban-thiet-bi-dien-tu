import React from "react";
import {CartRightWrapper} from './style'
import {Link} from 'react-router-dom'
import Input from '../../ComponentCommon/Input'

const CartRight = () => {
    return (
        <CartRightWrapper>
                        <h2 className="title_form-cart">
                            Thông tin thanh toán
                        </h2>
                        <form action="">
                            <p className="para_form-cart ">
                                Để tiếp tục đặt hàng, quý khách xin vui lòng <Link to='/login'>đăng nhập</Link> hoặc
                                nhập thông tin bên dưới.
                            </p>
                            <p className="para_form-cart">
                                Bằng cách đặt hàng, bạn đồng ý với <a href="">Điều khoản giao dịch</a> của Phúc Anh.
                            </p>
                            <Input connect='name' label='Họ và tên*' type="text" placeholder="Họ tên người nhận hàng"  />
                            <Input connect='number' label='Số điện thoại*' type="text" placeholder="Dùng để liên lạc khi giao hàng"  />
                            <Input connect='email' label='Email - Vui lòng điền chính xác*' type="text" placeholder="Để nhận thông báo đơn hàng"  />
                            
                            <div className=" input-home">
                                <Input connect='home1' label='Địa chỉ giao nhận hàng' type="radio" placeholder="Họ tên người nhận hàng"  />
                                <Input connect='home2' label='Giao nhận tại siêu thị' type="radio" placeholder="Họ tên người nhận hàng"  />
                                <Input type="text" placeholder="Địa chỉ nhận hàng"  />
                            </div>
                            <div className="comment">
                               <Input connect='comment'  label='Ghi chú' />
                               <textarea id="comment" rows="3"
                                   placeholder="Ghi chú thông tin viết hóa đơn, yêu cầu lắp đặt...">
                               </textarea>
                            </div>
                            <div className=" input-radio">
                                 <Input connect='payments1' label='Thanh toán khi nhận hàng.' type="radio"  name="payments" />
                                 <Input connect='payments2' label='Thanh toán chuyển khoản qua tài khoản ngân hàng.' type="radio"  name="payments"  />
                                 <Input connect='payments3' label='Thanh toán trực tuyến - bằng thẻ ATM, VISA, MASTER.' type="radio"  name="payments"  />
                                 <Input connect='payments4' label='Trả góp qua thẻ tín dụng.' type="radio"  name="payments"  />
                                 <Input connect='payments5' label='Thanh toán Online qua VNpay - bằng thẻ ATM, VISA, MASTER, quét mã QR VNpay.' type="radio"  name="payments"  />
                                
                            </div>
                        </form>
                        <button className="btn_order-cart">
                            <span>ĐẶT HÀNG</span>
                            <span>Tư vấn viên sẽ gọi điện thoại xác nhận</span>
                        </button>
        </CartRightWrapper>
    )
}

export default CartRight