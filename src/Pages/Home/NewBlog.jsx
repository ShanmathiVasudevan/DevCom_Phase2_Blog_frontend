import {Link} from 'react-router-dom'
function NewBlog(){
    return(
        <>
        <Link to={"/editblog"}>
        <button className="newblog">
        <span class="material-symbols-outlined">
            add_box
        </span>
            <p className="newblog-button">New Blog</p>
        </button>
        </Link>
        
        </>
    );
}
export default NewBlog