import '../../Styles/ContactUs.css'
import React,{useState} from 'react'
import {Link} from 'react-router-dom'
function ContactUs(){
    const [isNavOpen,setIsNavOpen]=useState(false);
  const dropdownItems=[
    {label: "Home", symbol: "home", key:""},
    {label:"My Blogs", symbol: "collections_bookmark",key: "MyBlogs"},
    {label:"Contact Us", symbol: "call", key:"ContactUs"},
    {label:"Logout", symbol: "logout",key: "SignIn"},
  ]
    return(
        <div className='contact-us-page'>
            <div className='contact-us-header'>
                <p className='title'>Contact Us</p>
                <div className="nav-block">
          <button className="sidebar-toggle" 
          onClick={()=>{setIsNavOpen(!isNavOpen); console.log(isNavOpen?"yes":"no")}}>
            <span class="material-symbols-outlined">
              menu
            </span>
          </button>

          {isNavOpen&&(
            <div className='dropdown-menu'>
              
                {dropdownItems.map((item,index)=>(
                  <Link to={`/${item.key}`}>
                  <button className="option-button">
                  <div className="option">
                      <span class="material-symbols-outlined">
                      {item.symbol}
                      </span>
                      <p>{item.label}</p>
                  </div>
                  </button>
                  </Link>
                  
                ))}
            </div>
          )}
        </div>
            </div>
            
        </div>
        
    );
}
export default ContactUs