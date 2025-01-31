import Pref from './Pref.jsx'
function PrefRow(){
    const contents=["Your posts","Destination","Culinary","Lifestyle","Tips & Hacks","Beauty"]
    return(
        <div className="pref-row">
            {contents.map((content,index)=>{
                console.log(index);
                return <Pref key={index} content={content}/>
            })}
            
        </div>
    );
}
export default PrefRow