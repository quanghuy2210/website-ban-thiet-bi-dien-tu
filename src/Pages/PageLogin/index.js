import React,{useEffect} from "react";
import Login from "../../Components/Login";

const PageLogin = ({handleGetUser}) => {
   useEffect(() => {
      document.title = "Đăng nhập"
    }, [])
   return (
    <Login handleGetUser={handleGetUser} />
   )
}

export default PageLogin