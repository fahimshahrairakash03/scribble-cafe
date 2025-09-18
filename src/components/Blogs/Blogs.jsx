import React, { useEffect, useState } from "react";
import BlogsDetails from "../BlogsDetails/BlogsDetails";

const Blogs = ({ handleBookmark, handleMarkedAsRead }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div>
      <h1 className="text-3xl"> Total Blogs: {blogs.length}</h1>
      {blogs.map((blog) => (
        <BlogsDetails
          handleMarkedAsRead={handleMarkedAsRead}
          handleBookmark={handleBookmark}
          key={blog.id}
          blog={blog}
        ></BlogsDetails>
      ))}
    </div>
  );
};

export default Blogs;
