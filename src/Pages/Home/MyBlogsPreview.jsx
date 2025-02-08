import React,{useState} from 'react'

function MyBlogsPreview({myblogs}){
    const [isPrLiked,setIsPrLiked]=useState(false)
    return(
        <>
        {myblogs.map((blog, index) => (
            <div className="preview-container">
                <div key={index} className="preview-item">
                    <div className="preview-pic" style={{ backgroundImage: `url(${blog.image})` }}>
                        <div className="pr-empty">
                            <div className='write-icon'>
                            <span class="material-symbols-outlined">
                            edit_square
                            </span>
                            </div>
                        
                        </div>
                        <div className="pr-info">
                            <div className="pr-left">
                                <h1 className="pr-name">{blog.name}</h1>
                                <p className="pr-des">{blog.description}</p>
                            </div>
                            <div className="pr-right">
                                <div className="user-details">
                                    <p className="publisher-name">{blog.date} | {blog.read}</p>
                                </div>
                                <div className='pr-icons'>
                                <button className={`pr-favourites ${isPrLiked?"liked":""}`} onClick={()=>{
                                    setIsPrLiked(!isPrLiked);
                                    console.log(isPrLiked)
                                }
                                }>
                                <span class="material-symbols-outlined">
                                    favorite
                                </span>
                                </button>
                                <button className="pr-share">
                                    <span class="material-symbols-outlined">
                                        share
                                    </span>
                                </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))}
        
        </>
    );

}

export default MyBlogsPreview