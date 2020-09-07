import React from "react";
import Col from "react-bootstrap/Col";

import BlogCard from "./BlogCard";

const BlogList = ({ blogs }) => {
  const blogList = blogs.map((blog) => (
    <Col lg="4" className="mt-4" key={blog._id}>
      <BlogCard blog={blog} />
    </Col>
  ));

  return blogList;
};

export default BlogList;
