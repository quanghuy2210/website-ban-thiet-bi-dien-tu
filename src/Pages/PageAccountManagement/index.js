import React,{useState, useEffect} from "react";
import axios from "axios";
import {PageAccountManagementWrapper} from './style'

const PageAccountManagement = () => {
    const [listDataTK, setListDataTK] = useState([])

    useEffect(() => {
        document.title = "danh sách user"
      }, [])
    
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

    const handleDelete = (idUser) => {
        axios.delete(`https://62d6134e15ad24cbf2d06300.mockapi.io/register/${idUser}`)
        .then(res => {
          console.log(res);
          console.log(res.data);
       })
       axios.delete(`https://62d6134e15ad24cbf2d06300.mockapi.io/register/1/login/${idUser}`)
        .then(res => {
          console.log(res);
          console.log(res.data);
       })
       const newList = listDataTK.filter(item => item.id !== idUser)
       setListDataTK(newList)
    }

    return (
        <PageAccountManagementWrapper>
           <h2>QUẢN LÝ TÀI KHOẢN NGƯỜI DÙNG</h2>
           <table>
               <tr>
                <th>STT</th>
                <th>Email</th>
                <th>Họ và tên</th>
                <th>Số điện thoại</th>
                <th>Giới tính</th>
                <th>Ngày sinh</th>
                <th>Mật Khẩu</th>
                <th>Địa chỉ</th>
                <th></th>
               </tr>
               {
                listDataTK.map((item,index) => {
                    return <tr>
                        <td>{index + 1}</td>
                        <td>{item.email}</td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.gt}</td>
                        <td>{item.birthday}</td>
                        <td>{item.password}</td>
                        <td>{item.address}</td>
                        <td><button onClick={() => handleDelete(item.id)}>Delete</button></td>
                    </tr>
                })
               }
           </table>
           {
            listDataTK.map((item, index) => {
                return (
                    <ul className="list-user-mobile">
                          <li>STT: {index + 1}</li>
                          <li>Email: {item.email}</li>
                          <li>Họ và tên: {item.name}</li>
                          <li>Số điện thoại: {item.phone}</li>
                          <li>Giới tính: {item.gt}</li>
                          <li>Ngày sinh: {item.birthday}</li>
                          <li>Mật khẩu: {item.password}</li>
                          <li>Địa chỉ: {item.address}</li>
                          <li onClick={() => handleDelete(item.id)}>Delete</li>
                    </ul>
                )
            })
           }
           
        </PageAccountManagementWrapper>
    )
}

export default PageAccountManagement