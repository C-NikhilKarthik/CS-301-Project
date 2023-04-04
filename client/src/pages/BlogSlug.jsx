import React, { useState, useEffect } from "react";

function BlogSlug() {
  const [list, Setlist] = useState([]);
  const generate_blogs = async (e) => {
    const temp_list = [];
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const email = urlParams.get("email");

    const response = await fetch("/home", {
      method: "POST",
      body: JSON.stringify({
        email_login: email,
      }),
      headers: { "Content-type": "application/json" },
    });

    const json = await response.json();

    Setlist(json.all_blogs)

    // var url = new URL("http://localhost:3000/explore");
    // url.searchParams.set("email", `${email}`);
    // setExplore_url(url);

    Setlist(temp_list);
  };


  console.log(list)
  useEffect(() => {
    generate_blogs();
  }, []);
  return <div>{list}</div>;
}

export default BlogSlug;
