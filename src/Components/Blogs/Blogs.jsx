import React, { useEffect, useState } from "react";
import DisplayBlog from "../DisplayBlog/DisplayBlog";

const Blogs = ({BookMark,handelReadingTime}) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div>
      <h2 className="mb-5 text-3xl">Total: {blogs.length}</h2>
      <div className='grid grid-cols-2 space-y-10'>
        {
            blogs.map(blog =><DisplayBlog BookMark={BookMark} handelReadingTime={handelReadingTime} key={blog.id} blog={blog}></DisplayBlog>)
        }
      </div>
    </div>
  );
};

export default Blogs;
