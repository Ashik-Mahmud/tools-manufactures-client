import { useEffect, useState } from "react";

const useBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch(`https://tools-manufactures.herokuapp.com/blogs/all`)
      .then((res) => res.json())
      .then((result) => {
        setLoading(true);
        setBlogs(result?.result);
      });
  }, []);
  return [blogs, loading, setBlogs];
};

export default useBlog;
