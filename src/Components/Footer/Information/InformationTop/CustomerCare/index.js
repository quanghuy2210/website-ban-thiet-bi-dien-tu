import React from "react";
import Input from '../../../../ComponentCommon/Input'
import {CustomerCareWrapper} from './style'

const CustomerCare = () => {
    return (
        <CustomerCareWrapper>
            <span className="image-customer-care">
                        <img src="/assets/image/trang-chu/dathongbao.png" alt="" />
                    </span>
                    <label class="title-form" for="txt-email">Đăng kí nhận thông tin khuyến mãi</label>
                    <form action="" className="form-footer-top">
                        <Input type='email' id="txt-email" placeholder="Nhập địa chỉ email của bạn" />
                        <Input type="submit" value="GỬI NGAY" />
                    </form>
        </CustomerCareWrapper>
    )
}

export default CustomerCare