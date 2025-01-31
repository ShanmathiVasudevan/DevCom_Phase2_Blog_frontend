import React,{useState} from 'react'
function Preview(){
    const blogs=[
        {
            name: "Finding Serenity",
            description: "Embracing peace through nature's embrace",
            image: "./pic1.jpeg",
            publisher: "Aakash"
        },
        {
            name: "Chasing Horizons",
            description: "The magic and meaning of sunsets",
            image: "./pic2.jpeg",
            publisher: "Rohit"
        },
        {
            name: "Stillness Within",
            description: "Unlocking the poer of meditation",
            image: "./pic3.jpeg",
            publisher: "Selena"
        }
    ]
    const [isPrLiked,setIsPrLiked]=useState(false)
    return(
        <>
        
        {blogs.map((blog, index) => (
            <div className="preview-container">
                <div key={index} className="preview-item">
                    <div className="preview-pic" style={{ backgroundImage: `url(${blog.image})` }}>
                        <div className="pr-empty"></div>
                        <div className="pr-info">
                            <div className="pr-left">
                                <h1 className="pr-name">{blog.name}</h1>
                                <p className="pr-des">{blog.description}</p>
                            </div>
                            <div className="pr-right">
                                <div className="user-details">
                                    <p className="publisher-name">{blog.publisher}</p>
                                    <button className="pic-button">
                                    <span className="material-symbols-outlined">
                                        account_circle
                                    </span>
                                    </button>
                                    
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
export default Preview