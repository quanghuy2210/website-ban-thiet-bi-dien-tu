import React,{useEffect} from "react";
import Registration from "../../Components/Registration";

const PageRegistration = () => {
    useEffect(() => {
        document.title = "Đăng kí"
      }, [])
    return (
        <Registration />
    )
}

export default PageRegistration