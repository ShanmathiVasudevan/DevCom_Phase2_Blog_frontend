import { useState } from "react";

function Dropdown(){
    const [isDropdownToggled,setDropdownToggled]=useState(false)
    const dropdownOptions=[
        {
            symbol: "call",
            text: "Contact Us"
        },
        {
            symbol: "logout",
            text: "Logout"
        }
    ]
    return(
        <div className="dropdown">
            <button className="menu" onClick={()=>{
                setDropdownToggled(!isDropdownToggled)
                console.log(isDropdownToggled)
            }}>
            <span>menu</span>
        </button>
        <div className={`options-container ${isDropdownToggled} ? "visible:""`}>
            {dropdownOptions.map((option,index)=>{
                return(
                    <button className="option-button">
                        <div className="option">
                            <span class="material-symbols-outlined">
                            {option.symbol}
                            </span>
                            <p>{option.text}</p>
                        </div>
                    </button>
                )
            })}
        </div>
        </div>
    );
}
export default Dropdown