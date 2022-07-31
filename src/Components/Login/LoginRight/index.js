import React from "react";
import {Link} from 'react-router-dom'
import {LoginRightWrapper} from './style'

const LoginRight = () => {
    return (
        <LoginRightWrapper>
                   <h2>
                        Bạn chưa là thành viên
                    </h2>
                    <span>Đăng ký là thành viên để hưởng nhiều lợi ích và đặt mua hàng dễ dàng hơn.</span>
                    <Link to='/registration'>Đăng ký tài khoản</Link>
        </LoginRightWrapper>
    )
}

export default LoginRight