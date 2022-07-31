import React,{useState, useEffect} from "react";
import {useNavigate} from 'react-router-dom'
import {LoginLeftWrapper} from './style'
import Input from '../../ComponentCommon/Input'

const LoginLeft = ({handleGetUser})=>{
    const [formData, setFormData] = useState({
        email:'',
        password:''
    })
    const [listDataTK, setListDataTK] = useState([])
    
    const handleChange = (event) => {
        const {name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value
        });
    }
    
    useEffect(() => {
        async function fetchPostUser() {
            try {
                const requestUrl ='https://62d6134e15ad24cbf2d06300.mockapi.io/nguoidung'
                const response = await fetch(requestUrl)
                const responseJSON = await response.json()
                setListDataTK(responseJSON)
            } catch (error){
                console.log('object', error.message);
            }
        }
        fetchPostUser();
        }, [])
        const navigate = useNavigate();
        const handleLogin = () => {
            
            const userLogin = listDataTK.find(item => {
                if(item.email === formData.email && item.password === formData.password) return true
                })
            
            if(userLogin) {
                handleGetUser(userLogin);
                navigate("/");
            }else{
                console.log(alert('Email hoặc mật khẩu chưa chính xác'));
            }
          };
    return (
        <LoginLeftWrapper>
                   <h2>
                        Thông tin khách hàng đăng nhập hệ thống
                    </h2>
                    <form action="">
                        <Input label='Email đăng nhập' type="email" connect='email' name='email' value={formData.email} onChange={handleChange} />
                        <Input label='Mật Khẩu' type="password" connect='pass' name='password' value={formData.password} onChange={handleChange} />
                        <div className="submit">
                            <button className="btn-DN" onClick={handleLogin} > 
                                Đăng nhập
                            </button>
                            <a href="#">Quên Mật khẩu</a>
                        </div>
                    </form>
                    <a href="#" className="btn-login">
                        <img src="/assets/image/log-in-with-google.jpg" alt="gg" />
                    </a>
                    <a href="#" className="btn-login">
                        <img src="/assets/image/log-in-with-facebook.jpg" alt="fb" />
                    </a>
        </LoginLeftWrapper>
    )
}

export default LoginLeft