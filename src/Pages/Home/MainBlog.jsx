
import React,{useState} from 'react'
function MainBlog(){
    const [isLiked,setIsLiked]=useState(false)
    return(
        <div className="main-blog">
            <div className="empty">
            </div>
            <div className="info">
                <div className="left-text">
                    <h1 className="main-name">A Himalayan Escape for Every Traveler</h1>
                    <p className="description">Whether it’s trekking through lush trails, indulging in local delicacies, or simply soaking in the serene vibes, Manali is the ultimate destination for every traveller.</p>
                </div>
                <div className="right-text">
                    <div className="user-details">
                        <button className="pic-button">
                        <span className="material-symbols-outlined">
                            account_circle
                        </span>
                        </button>
                        <p className="publisher-name">Publisher name</p>
                    </div>
                    <p className="blog-details">24 Jan 2025 | 10 min read</p>
                    <button className={`favourites ${isLiked?"liked":""}`} onClick={()=>{
                        setIsLiked(!isLiked);
                        console.log(isLiked)
                    }
                    }>
                    <span class="material-symbols-outlined">
                        favorite
                    </span>
                    </button>
                    <button className="share">
                    <span class="material-symbols-outlined">
                        share
                    </span>
                    </button>
                </div>
            </div>
        </div>
    );
}
export default MainBlog