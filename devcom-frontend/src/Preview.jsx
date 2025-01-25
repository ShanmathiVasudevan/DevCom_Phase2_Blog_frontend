function Preview(){
    const blogs=[
        {
            name: "AI/ML",
            image: "./aiml.jpg",
            published: "10/01/2025",
        },
        {
            name: "sustainibility",
            image: "./sustain.jpg",
            published: "31/10/2024",
        },
        {
            name: "theatre-arts",
            image: "./theatre-arts.jpeg",
            published: "03/06/2024"
        }
    ]
    return(
        <>
        
        {blogs.map((blog, index) => (
            <div className="preview-container">
                <div key={index} className="preview-item">
                    <div className="preview-pic">
                        <img src={blog.image} alt={blog.name} className="img1" />
                    </div>
                    <div className="preview-des">
                        
                        <h3>{blog.name}</h3>
                        <p>Published on: {blog.published}</p>
                    </div>
                </div>
            </div>
        ))}
        
        </>  
    );
}
export default Preview