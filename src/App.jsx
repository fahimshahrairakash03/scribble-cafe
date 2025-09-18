import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [bookmarkedBlogs, setBookmarkedBlogs] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const handleBookmark = (blog) => {
    setBookmarkedBlogs([...bookmarkedBlogs, blog]);
  };

  const handleMarkedAsRead = (time) => {
    setReadingTime(parseInt(readingTime) + parseInt(time));
    handleReadBokmark(time);
  };
  const handleReadBokmark = (id) => {
    const remaining = bookmarkedBlogs.filter((blog) => blog.id !== id);
    setBookmarkedBlogs(remaining);
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="main-container flex ">
        <div className="left-container text-center w-[70%] bg-gray-400">
          <Blogs
            handleMarkedAsRead={handleMarkedAsRead}
            handleBookmark={handleBookmark}
          ></Blogs>
        </div>
        <div className="right-container border-2 w-[30%] bg-gray-200">
          <h1>Bookedmark Count: {bookmarkedBlogs.length}</h1>
          <h1>Reading Time: {parseInt(readingTime)}</h1>
          <div>
            {bookmarkedBlogs.map((blog) => (
              <p className="bg-red-600 p-2 shadow m-2 text-white">
                {blog.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
