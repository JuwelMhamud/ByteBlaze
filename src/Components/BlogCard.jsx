import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import plaseholderImage from "../../public/404.jpg";

const BlogCard = ({ blog, deleteable, handleDelete }) => {
  const { cover_image, title, description, published_at, id } = blog;
  
  return (
    <div className="flex relative">
      <div className="border-2 transition hover:scale-105 border-primary hover:border-secondary group hover:no-underline rounded-lg border-opacity-50 ">
        <Link
          rel="noopener noreferrer"
          to={`/blogs/${id}`}
          className="max-w-sm mx-auto  focus:no-underline dark:bg-gray-50"
        >
          <img
            role="presentation"
            className="object-cover w-full rounded h-44 dark:bg-gray-500"
            src={cover_image || plaseholderImage}
          />
          <div className="p-6 space-y-2">
            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
              {title}
            </h3>
            <span className="text-xs dark:text-gray-600">
              {new Date(published_at).toLocaleDateString()}
            </span>
            <p>{description}</p>
          </div>
        </Link>
      </div>
      {deleteable && <div onClick={()=>handleDelete(id)} className="absolute bg-primary p-3 hover:scale-105 -top-5 -right-5 cursor-pointer rounded-full"><MdDeleteForever size={25} className="text-secondary group-hover:text-primary" /></div>}
    </div>
  );
};

export default BlogCard;
