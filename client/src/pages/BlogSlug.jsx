import React, { useState, useEffect } from "react";

function BlogSlug() {
  const [list, Setlist] = useState([]);
  const [content,SetContent]=useState('')
  const generate_blogs = async (e) => {
    const temp_list = [];
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const blogId = urlParams.get("blogId");

    const response = await fetch("/readmore", {
      method: "POST",
      body: JSON.stringify({
        BlogId: blogId,
      }),
      headers: { "Content-type": "application/json" },
    });

    const json = await response.json();

    SetContent(json.blog_details.Content)

    // var url = new URL("http://localhost:3000/explore");
    // url.searchParams.set("email", `${email}`);
    // setExplore_url(url);

    //Setlist(temp_list);
  };


  console.log(content)
  useEffect(() => {
    generate_blogs();
  }, []);
  return <div>{content}</div>;
}

export default BlogSlug;
