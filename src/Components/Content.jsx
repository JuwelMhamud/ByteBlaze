import { useLoaderData } from "react-router-dom";
import plaseholderImage from "../../public/404.jpg";
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw'

const Content = () => {
  const blogs = useLoaderData();
  const { cover_image, title, tags, body_html } = blogs;
  console.log(blogs);
  return (
    <div className="border-2 border-primary  group  rounded-lg border-opacity-20 p-2 ">
      <div
        rel="noopener noreferrer"
        className="  mx-auto  focus:no-underline dark:bg-gray-50"
      >
        <img
          role="presentation"
          className="object-cover w-full rounded  dark:bg-gray-500"
          src={cover_image || plaseholderImage}
        />
        <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
          {tags.map((tag) => (
            <a
              key={tag}
              rel="noopener noreferrer"
              href="#"
              className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50"
            >
              # {tag}
            </a>
          ))}
        </div>
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
        </div>
      </div>
    </div>
  );
};

export default Content;
