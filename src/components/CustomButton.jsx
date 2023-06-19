
import "./components/CustomButton.scss"

const CustomButton = ({onClick, children}) => {
    return (
        <div className="custom-button-container">
            {children}
        </div>
    )
}

export default CustomButton 