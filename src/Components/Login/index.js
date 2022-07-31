import React from "react";
import {LoginWrapper} from './style'
import LoginLeft from "./LoginLeft";
import LoginRight from "./LoginRight";

const Login = ({handleGetUser}) => {
    return (
        <LoginWrapper>
            <LoginLeft handleGetUser={handleGetUser} />
            <LoginRight />
        </LoginWrapper>
    )
}

export default Login