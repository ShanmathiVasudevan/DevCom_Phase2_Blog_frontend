import React,{useState} from 'react'
const username="Aakash"
const blogs=[
    {
        name: "Finding Serenity",
        description: "Embracing peace through nature's embrace",
        image: "./pic1.jpeg",
        publisher: "Aakash",
        date: "24 Jan 2024",
        read: "10 min read"
    },
    {
        name: "Chasing Horizons",
        description: "The magic and meaning of sunsets",
        image: "./pic2.jpeg",
        publisher: "Rohit",
        date: "28 Feb 2024",
        read: "10 min read"
    },
    {
        name: "Stillness Within",
        description: "Unlocking the poer of meditation",
        image: "./pic3.jpeg",
        publisher: "Selena",
        date: "3 June 2024",
        read: "10 min read"
    },
    {
        name: "Stillness Within",
        description: "Unlocking the poer of meditation",
        image: "./pic3.jpeg",
        publisher: "Aakash",
        date: "18 Oct 2024",
        read: "10 min read"
    },
    {
        name: "Stillness Within",
        description: "Unlocking the poer of meditation",
        image: "./pic3.jpeg",
        publisher: "Selena",
        date: "31 Dec 2024",
        read: "10 min read"
    },
    {
        name: "Stillness Within",
        description: "Unlocking the poer of meditation",
        image: "./pic3.jpeg",
        publisher: "Selena",
        date: "25 Dec 2024",
        read: "10 min read"
    },
    {
        name: "Stillness Within",
        description: "Unlocking the poer of meditation",
        image: "./pic3.jpeg",
        publisher: "Aakash",
        date: "3 Jan 2024",
        read: "10 min read"
    }

]
export const myblogs=blogs.filter(blog=>blog.publisher===username)

function Preview(){
    const [isPrLiked,setIsPrLiked]=useState(false)
    console.log(blogs)
    console.log(myblogs)
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