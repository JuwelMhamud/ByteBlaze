import { useEffect, useState } from "react";
import { deleteBlog, getBlogs } from "../Utility/storeData";
import BlogCard from "../Components/BlogCard";
import EmtrybookMarks from "../Components/EmtrybookMarks";


const Bookmarks = () => {
    const [blogs, setBlogs] = useState([])
    
    useEffect(()=>{
        const storedBlogs = getBlogs()
        setBlogs(storedBlogs)
    },[])

    const handleDelete = id =>{
        deleteBlog(id)
        const storedBlogs = getBlogs()
        setBlogs(storedBlogs)
      }
      if(blogs.length<1) return <EmtrybookMarks message='No Bookmarks Available!' address={'/blogs'} label={'Go To Blogs'}/>

    return (
        <div className="grid px-8 py-8 justify-center  grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {
            blogs.map((blog)=><BlogCard handleDelete={handleDelete} deleteable={true} key={blog.id} blog={blog} />)
          }
        </div>
    );
};

export default Bookmarks;