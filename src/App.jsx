import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [bookmarkedBlogs, setBookmarkedBlogs] = useState([]);
  const handleBookmark = (blog) => {
    setBookmarkedBlogs([...bookmarkedBlogs, blog]);
  };
  console.log(bookmarkedBlogs);

  return (
    <>
      <Navbar></Navbar>
      <div className="main-container flex ">
        <div className="left-container text-center w-[70%] bg-gray-400">
          <Blogs handleBookmark={handleBookmark}></Blogs>
        </div>
        <div className="right-container border-2 w-[30%] bg-gray-200">
          <h1>Selected Blogs</h1>
          <div>
            {bookmarkedBlogs.map((blog) => (
              <p>{blog.name}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
