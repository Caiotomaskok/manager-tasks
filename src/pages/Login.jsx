import { useNavigate } from "react-router-dom"

import CustomButton from "../components/CustomButton"

import "./Login.scss"
import logo from "../assents/images/logo-2.png"
const Login = () => {
    const navigate = useNavigate()

    const handleSignClick = () => {
        navigate("/")
    };
    return (

        <div className="login-container">
            <img src={logo} alt="Full stack club" />
            <div className="button-container">
                <CustomButton onclick={handleSignClick}>Entrar</CustomButton>
            </div>
        </div>
    )
}

export default Login