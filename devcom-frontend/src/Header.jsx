import React,{useState} from 'react'
function Header(){
  const [isNavOpen,setIsNavOpen]=useState(false);
    return(
    <div className="header">
      
      <div className="middle-section">
        <input
          type="text"
          className="search-box"
          placeholder="Search for blog categories, profile names etc.."
        />
      </div>
      <div className="right-section">
        <div>
          <button className='favourites'>
          <span class="material-symbols-outlined">
            favorite
          </span>
          </button>
        </div>
        <div className="daily-blog">The Daily Blog</div>
        <div className="profile-pic">
          <button className='pic-button'>
          <span class="material-symbols-outlined">
            account_circle
          </span>
          </button>
        </div>
        <div className="nav-block">
          <button className="sidebar-toggle" 
          onClick={()=>{setIsNavOpen(!isNavOpen); console.log(isNavOpen?"yes":"no")}}>
            <span class="material-symbols-outlined">
              menu
            </span>
          </button>
        </div>
      </div>
    </div>);
}
export default Header 