import Header from './Header.jsx'
import '../../Styles/MyBlogs.css'
import Preview from './Preview.jsx'
import MyBlogsPreview from './MyBlogsPreview.jsx'
import {myblogs} from './Preview.jsx'

function MyBlogs(){
    return(
        <>
            <Header/>
            <div className='drafts'>
            <div className="profile-pic">
                <div className="pic">
                <span class="material-symbols-outlined">
                account_circle
                </span>
            </div>
            
            </div>
            <div className="drafts-info">
            <p className="drafts-header">The Daily Blog</p>
            <div className="draft-buttons">
                <button className="button1">Blogger</button>
                <button className="button2">Writer</button>
            </div>
            <p className="draft-des">Welcome to My Drafts Page!</p>
            </div>
            </div>
            <div className='middle'>
                <div className="preview-row">
                    <MyBlogsPreview myblogs={myblogs}/>
                </div>
            </div>
        </>
    );
}
export default MyBlogs