import React from "react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { blogId } = useParams();
  return (
    <div className="blog-details py-10">
      <div className="container mx-auto">
        <h2 className="text-2xl">Blog Id {blogId}</h2>
      </div>
    </div>
  );
};

export default BlogDetails;
