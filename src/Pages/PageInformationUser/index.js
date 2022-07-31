import React,{useEffect} from "react";
import {Link} from 'react-router-dom'
import {PageInformationUserWrapper} from './style'

const PageInformationUser = ({user}) => {
    
    useEffect(() => {
        document.title = "Thông tin user"
      }, [])

    const {email, name, phone , gt, birthday, password, address} = user
    return (
        <PageInformationUserWrapper>
            <h2>THÔNG TIN TÀI KHOẢN CỦA BẠN</h2>
           <table>
            <tr>
                <td>Email</td>
                <td>{email}</td>
            </tr>
            <tr>
                <td>Họ và tên</td>
                <td>{name}</td>
            </tr>
            <tr>
                <td>Số điện thoại</td>
                <td>{phone}</td>
            </tr>
            <tr>
                <td>giới tính</td>
                <td>{gt}</td>
            </tr>
            <tr>
                <td>Ngày sinh</td>
                <td>{birthday}</td>
            </tr>
            <tr>
                <td>Mật khẩu</td>
                <td>{password}</td>
            </tr>
            <tr>
                <td>Địa chỉ</td>
                <td>{address}</td>
            </tr>
           </table>
           <Link to='/updateUser'>Sửa thông tin</Link>
        </PageInformationUserWrapper>
    )
}

export default PageInformationUser