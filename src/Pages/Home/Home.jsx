import '../../Styles/Home.css'
import Header from './Header.jsx'
import MainBlog from './MainBlog'
import PrefRow from './PrefRow.jsx'
import PreviewRow from './PreviewRow.jsx'
import NewBlog from './NewBlog.jsx'
function Home(){
    return(
        <div className='home-page'>
          <Header/>
          <div className="middle">
            <MainBlog/>
            <PrefRow/>
            <PreviewRow/>
          </div>
          <div className='newblog-container'>
            <NewBlog/>
          </div>
        </div>
      );
}
export default Home