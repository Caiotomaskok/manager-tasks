import CustomButton from "../components/CustomButton"

import "./Sidebar.scss"
import logo from "../assents/images/logo.png"

const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <div className="logo">
                <img src={logo} alt="fullstack club" />
            </div>

            <div className="sign-out">
                <CustomButton>Sair</CustomButton>
            </div>
        </div>

        
    )
}

export default Sidebar