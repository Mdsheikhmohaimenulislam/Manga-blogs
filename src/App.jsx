import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const [bookMarkData, setBookMarkData] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const BookMark = (blog) => {
    setBookMarkData([...bookMarkData, blog]);
  };

  const handelReadingTime = (time , id) => {
    const convertTime = parseInt(time);
    const newReadingTime = readingTime + convertTime;
    setReadingTime(newReadingTime);
    handleRemoveBookMark(id);
  };

  const handleRemoveBookMark = (id) => {
    const removeBookMark = bookMarkData.filter(removeMark => removeMark.id !== id)
    setBookMarkData(removeBookMark);
    console.log(removeBookMark);
  }
  return (
    <>
      <Navbar></Navbar>
      <div className="flex">
        <div className="w-[60%] mx-auto bg-gray-300 p-5 rounded-xl">
          <Blogs
            BookMark={BookMark}
            handelReadingTime={handelReadingTime}
          ></Blogs>
        </div>
        <div className="w-[30%] mx-auto bg-gray-600 text-2xl text-center p-5 rounded-xl">
          <h1 className="text-white">Reading Time: {readingTime}</h1>
          <h1 className="text-white">Bookmark Count: {bookMarkData.length}</h1>
          {bookMarkData.map((mark) => (
            <div key={mark.id} className=" bg-red-200 p-5 rounded-xl mt-5 " mark={mark}>
              {mark.title}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
