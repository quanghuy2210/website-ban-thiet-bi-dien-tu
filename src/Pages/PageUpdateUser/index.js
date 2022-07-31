import React,{useState, useEffect} from "react";
import {Link} from 'react-router-dom'
import axios from "axios";
import {PageUpdateUserWrapper} from './style'
import Input from '../../Components/ComponentCommon/Input'

const PageUpdateUser = ({user}) => {
    const [formData, setFormData] = useState(user)

    useEffect(() => {
        document.title = "Cập nhật TT user"
      }, [])

    const handleChange = (event) => {
        const {name, value } = event.target;
        if(value){
            setFormData({
                ...formData,
                [name]: value
              });
        }
    }

    const handleUpdate = (event) => {
        event.preventDefault();
        const user1 = {...formData};
        const userLogin1 = {
            email:formData.email,
            password:formData.password
        }
       if(
        user1.email && user1.name && user1.phone && user1.gt && user1.birthday && user1.password && user1.address 
       ){
        axios.put(`https://62d6134e15ad24cbf2d06300.mockapi.io/register/${user.id}`, {...user1})
        .then(res => {
          console.log(res);
          console.log(res.data);
       })
       axios.put(`https://62d6134e15ad24cbf2d06300.mockapi.io/register/1/login/${user.id}`, {...userLogin1})
        .then(res => {
          console.log(res);
          console.log(res.data);
       })
       } else{
        console.log(alert('Bạn chưa nhập đủ thông tin'));
       }
      };

    return (
        <PageUpdateUserWrapper>
           <h2>CẬP NHẬT THÔNG TIN</h2>
           <form>
                <Input label='Email đăng ký*' type='text' connect='email' name='email' value={formData.email} onChange={handleChange} />
                <Input label='Tên*' type='text' connect='name' name='name' value={formData.name} onChange={handleChange} />
                <Input label='số di động*' type='number' connect='number' name='phone' value={formData.phone} onChange={handleChange} />
                <Input label='Giới tính*' type='text' connect='gt' name='gt' value={formData.gt} onChange={handleChange} />
                <Input label='Ngày sinh*' type='date' connect='birthday' name='birthday' value={formData.birthday} onChange={handleChange} />
                <Input label='Mật khẩu*' type='password' connect='pass1' name='password' value={formData.password} onChange={handleChange} />
                <Input label='Nhập lại mật khẩu*' type='password' connect='pass2' name='password' value={formData.password} onChange={handleChange} />
                <Input label='Địa chỉ*' type='text' connect='home' name='address' value={formData.address} onChange={handleChange} />
                            
           </form>
           <button onClick={handleUpdate} ><Link to='/login' >Cập nhật</Link></button>
           
        </PageUpdateUserWrapper>
    )
}

export default PageUpdateUser