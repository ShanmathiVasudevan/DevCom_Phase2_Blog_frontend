import React,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom' 
import Axios from 'axios'

function MenuButton(){
    const [isNavOpen,setIsNavOpen]=useState(false);
    const [isLoggedIn, setIsLoggedIn]=useState(false);

    useEffect(()=>{
      const getToken=()=>{
        const cookies=document.cookie.split(";");
        const tokenCookie=cookies.find(row=>row.startsWith("token="));
        return tokenCookie? tokenCookie.split("=")[1]:null;
      };
      const checkAuth=async()=>{
        const token=getToken();
        if(!token){
          setIsLoggedIn(false);
          return;
        }
        try{
          const response=await Axios.post('/check_auth', new URLSearchParams({token}))
            if(response.data.success==="user auth"){
              setIsLoggedIn(true)
            }
            else {
              setIsLoggedIn(false)
            } 
        }
        catch(error){
          console.error("Not logged in!");
          setIsLoggedIn(false)
        }
      };
      checkAuth();
      },[])

const dropdownItems=[
  {label: "Home", symbol: "home", key:"home"},
  {label:"My Blogs", symbol: "collections_bookmark",key: "MyBlogs"},
  isLoggedIn?
  {label:"Logout", symbol: "logout",key: ""}:
  {label: "Signup", symbol: "login",key: "signup"}
]
    return(
        <div className="nav-block">
          <button className="sidebar-toggle" 
          onClick={()=>{setIsNavOpen(!isNavOpen); console.log(isNavOpen?"yes":"no")}}>
            <span class="material-symbols-outlined">
              menu
            </span>
          </button>

          {isNavOpen&&(
            <div className='dropdown-menu'>
              
                {dropdownItems.map((item)=>(
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
    );
}
export default MenuButton