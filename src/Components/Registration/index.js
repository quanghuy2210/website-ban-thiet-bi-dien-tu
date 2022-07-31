import React,{useState,useEffect} from "react";
import axios from "axios";
import {Link} from 'react-router-dom'
import {RegistrationWrapper} from './style'
import Input from "../ComponentCommon/Input";

const Registration = () => {
    const [formData, setFormData] = useState({
        email:'',
        name:'',
        phone: '',
        gt:'',
        birthday: '',
        password:'',
        address:'',
        agress:''

    })

    const handleChange = (event) => {
        const {name, value } = event.target;
        if(value){
            setFormData({
                ...formData,
                [name]: value
              });
        }
    }
    const handleChangeRadio = (event) => {
        const gt = event.target.value
        setFormData(
            {   ...formData,
                gt
            }
        )
    }
    const handleChangeCheck = (event) => {
        const agress = event.target.value
        setFormData(
            {   ...formData,
                agress
            }
        )
    }
    const handleAdd = (event) => {
        event.preventDefault();
        const user = {...formData}
       if(
        user.email && user.name && user.phone && user.gt && user.birthday && user.password && user.address && user.agress
       ){
        axios.post(`https://62d6134e15ad24cbf2d06300.mockapi.io/nguoidung`, {...user})
        .then(res => {
          console.log(res);
          console.log(res.data);
       })
       } else{
        console.log(alert('Bạn chưa nhập đủ thông tin'));
       }
      };
    return (
        <RegistrationWrapper>
               <h2 className="title-registration">
                    Tạo tài khoản khách hàng cá nhân
                </h2>
                <div className="wrapper-registration">
                    <div className="form-registration">
                        <form action="">
                            <Input label='Email đăng ký*' type='text' connect='email' name='email' value={formData.email} onChange={handleChange} />
                            <Input label='Tên*' type='text' connect='name' name='name' value={formData.name} onChange={handleChange} />
                            <Input label='số di động*' type='number' connect='number' name='phone' value={formData.phone} onChange={handleChange} />
                            
                            <div className="gt">
                               <label>Giới tính*</label>
                               <Input label='Nam' type='radio' name="gt" connect='nam' id='nam' value='nam' onChange={handleChangeRadio} />
                               <Input label='Nữ' type='radio' name="gt" connect='nu' id='nu'  value='nữ' onChange={handleChangeRadio}  />
                            </div>
                            <Input label='Ngày sinh*' type='date' connect='birthday' name='birthday' value={formData.birthday} onChange={handleChange} />
                            <Input label='Mật khẩu*' type='password' connect='pass1' name='password' value={formData.password} onChange={handleChange} />
                            <Input label='Nhập lại mật khẩu*' type='password' connect='pass2' name='password' value={formData.password} onChange={handleChange} />
                            <Input label='Địa chỉ*' type='text' connect='home' name='address' value={formData.address} onChange={handleChange} />
                            
                            <div className="comment-agress">
                                <textarea name="" id="" placeholder="Khi bạn truy cập vào trang web của chúng tôi có nghĩa là bạn đồng ý với các điều khoản này. Trang web có quyền thay đổi, chỉnh sửa, thêm hoặc lược bỏ bất kỳ phần nào trong Quy định và Điều kiện sử dụng, vào bất cứ lúc nào. Các thay đổi có hiệu lực ngay khi được đăng trên trang web mà không cần thông báo trước. Và khi bạn tiếp tục sử dụng trang web, sau khi các thay đổi về Quy định và Điều kiện được đăng tải, có nghĩa là bạn chấp nhận với những thay đổi đó.Quý khách vui lòng kiểm tra thường xuyên để cập nhật những thay đổi của chúng tôi.">
                                </textarea>
                                <Input label='Tôi đã đọc, và đồng ý theo điều khoản đăng ký.*'  type='checkbox' value='Tôi đã đọc, và đồng ý theo điều khoản đăng ký.' connect='agress' name='agress' onChange={handleChangeCheck}  />
                                <Input label='Đăng ký nhận thông tin khuyến mãi' type='checkbox' />
                                
                            </div>
                            
                        </form>
                        <div className="btn-DK" onClick={handleAdd} >
                                { 
                                formData.email && formData.name && formData.phone && formData.gt && formData.birthday && formData.password && formData.address && formData.agress
                                ?   <Link to='/login'>ĐĂNG KÝ</Link> : 'ĐĂNG KÝ'
                                }
                                
                                </div>
                    </div>
                    <div className="sign-btn">
                        <a href="#">
                            <img src="/assets/image/img_signup_go.jpg" alt="" />
                        </a>
                        <a href="#">
                            <img src="/assets/image/img_signup_fb.jpg" alt="" />
                        </a>
                    </div>
                </div>
        </RegistrationWrapper>
    )
}

export default Registration