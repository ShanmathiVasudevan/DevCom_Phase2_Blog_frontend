import React from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";
//import '../../Styles/EditBlog.css'

export const Editor = () => {
  const [state, setState] = React.useState({ value: null });
  const handleChange = value => {
    setState({ value });
  };
  const [title, setTitle] = React.useState('');
  return (
    <div className="text-editor">
      <EditorToolbar />
      <input type='text' placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)}></input>
      <ReactQuill
        theme="snow"
        value={state.value}
        onChange={handleChange}
        placeholder={'hello'}
        modules={modules}
        formats={formats}
      />
    </div>
  );
};

export default Editor;