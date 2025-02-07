import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";
import "./editblog.css";

function EditBlog() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=2")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState({ value: null });
  const handleChange = (value) => {
    setBody({ value });
  };
  const addPosts = async (title, body) => {
    await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: body,
        userId: Math.random().toString(36).slice(2),
      }),
      headers: {
        "Content-type": "application/json; charset=UTF -8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPosts((posts) => [data, ...posts]);
        setTitle("");
        setBody("");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPosts(title, body);
  };

  return (
    <>
      <div className="create-post">
        <form onSubmit={handleSubmit}>
          <div className="text-editor">
            <EditorToolbar />
            <input
              id="title"
              type="text"
              placeholder="Enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
            <ReactQuill
              theme="snow"
              value={body.value}
              onChange={handleChange}
              placeholder={"Enter body"}
              modules={modules}
              formats={formats}
            />
          </div>
          <button id="addPost" type="submit">
            Add Post
          </button>
        </form>
      </div>
    </>
  );
}

export default EditBlog;
