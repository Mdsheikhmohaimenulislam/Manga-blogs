import React from "react";
import { FaBookmark } from "react-icons/fa";

const DisplayBlog = ({ blog ,BookMark,handelReadingTime}) => {

  return (
    <div className="gap-1">
      <div className="card bg-base-100 w-90 shadow-sm ">
        <figure>
          <img className="bg-cover" src={blog.manga_cover_img} alt="Shoes" />
        </figure>
        <div className="card-body ">
          <div className="flex items-center justify-around">
            <img
              className="w-16 h-18 rounded-full "
              src={blog.writer_img}
              alt=""
            />
            <h2 className="text-2xl"> {blog.title} </h2>
           <button onClick={() => BookMark(blog)}> <FaBookmark className="text-orange-500 text-2xl" /></button>
          </div>
          <h3 className="text-2xl">{blog.writer_name}</h3>
         
          <p>
            {blog.bio}
          </p>
          <div className="flex">
            {
                blog.hashtag.map(has => <p className="text-blue-600" key={has}>{has}</p>)
            }
          </div>
          <div className="card-actions justify-end">
            <button onClick={() => handelReadingTime(blog.reading_time , blog.id)} className="btn btn-primary">Click and Read</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayBlog;
