
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "github-markdown-css";

function MarkdownEditor() {
  const [text, setText] = useState("");

  const handleTextChange = (value) => {
    setText(value);
  };

  return (
    <div className="grid grid-cols-2 gap-8">
      <div className="bg-white rounded-md shadow-md p-4">
        <label className="block text-gray-700 font-bold mb-2">Write</label>
        <ReactQuill value={text} onChange={handleTextChange} />
      </div>
      <div className="bg-white rounded-md shadow-md p-4 markdown-body">
        <label className="block text-gray-700 font-bold mb-2">Preview</label>
        <div dangerouslySetInnerHTML={{ __html: text }} />
      </div>
    </div>
  );
}

export default MarkdownEditor;
