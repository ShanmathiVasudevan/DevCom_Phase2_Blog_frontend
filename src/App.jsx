import React, {useState, useEffect} from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=2')
    .then((response) => response.json())
    .then((data) => {console.log(data); setPosts(data);})
    .catch((err) => {console.log(err.message);});
  }, []);


  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const addPosts = async(title,body) => {
    await fetch('https://jsonplaceholder.typicode.com/posts',{method: 'POST',
      body: JSON.stringify({
        title: title,
        body: body,
        userId: Math.random().toString(36).slice(2),
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF -8',
      },
    })
    .then((response) => response.json())
    .then((data) => {
      setPosts((posts) => [data, ...posts]);
      setTitle('');
      setBody('');
    })
    .catch((err) => {console.log(err.message)});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addPosts(title,body);
  }

  const [selection, setSelection] = useState('');
  useEffect(() => {
    document.addEventListener('selectionchange', () => {
      setSelection(document?.getSelection()?.toString());
    });
  },[])
  //console.log(selection);

  const [bold, setBold]=useState(false);
  function isBold(arg){
    let arg1=[arg];
    arg1=arg1.map(arg => <span style={{fontWeight:bold?'normal':'bold'}}>{arg}</span>);
    console.log(arg);
    console.log(arg1);
    console.log(arg1[0].props.style);
    //setBold(bold => !bold);
    //arg1[0].props.style.fontweight="normal"?"bold":"normal";
  }

  return (
    <>
      <div className="create-post">
        <button onClick={isBold(selection)}><b>B</b></button>
        <button><i>I</i></button>
        <button><u>U</u></button>
        
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)}></input>
          <br></br>
          <textarea contentEditable placeholder="Type the body of your post..." name="" id="" value={body} onChange={(e) => setBody(e.target.value)}/>
          <br></br>
          <button type="submit">Add Post</button>
        </form>
      </div>
      <div>
        {posts.map((posts) => {
          return(<div key={posts.id}>
        <h2>{posts.title}</h2>
        <p>{posts.body}</p>
      </div>);
    })}
      
      </div>
    </>
  )
}

export default App
