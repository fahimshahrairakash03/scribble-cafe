import React from "react";
import { CiBookmark } from "react-icons/ci";

const BlogsDetails = ({ blog, handleBookmark }) => {
  const {
    id,
    name,
    cover,
    hashtag,
    description,
    authorImg,
    authorName,
    status,
  } = blog;

  return (
    <div className="">
      <div className="card mx-20 my-5 bg-base-100 w-[80%] shadow-sm">
        <figure>
          <img src={cover} alt="Shoes" />
        </figure>

        <div className="card-body">
          <div className="author flex justify-between">
            <h3>{blog.authorName}</h3>
            <img className="w-16 rounded-4xl" src={authorImg} alt="" />
          </div>
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="flex justify-between">
            {hashtag.map((tag, idx) => (
              <span key={idx}>{tag} </span>
            ))}
          </div>
          <div className="card-actions flex justify-between items-center mt-4">
            <button onClick={() => handleBookmark(blog)}>
              {" "}
              <CiBookmark className="text-4xl"></CiBookmark>
            </button>
            <button className="btn btn-primary">Mark as Read</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsDetails;
