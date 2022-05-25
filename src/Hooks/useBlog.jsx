import { useEffect, useState } from "react";

const useBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:5000/blogs/all`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setLoading(true);
        setBlogs(result?.result);
      });
  }, []);
  return [blogs, loading];
};

export default useBlog;
