import React from "react";

import { BlogContent } from "data/Data";

import BlogAccordion from "components/blog-accordion/BlogAccordion";

const Blog = () => {
  return (
    // <div style={{ minHeight: 'calc(100vh-128px)' }}>Blog ...in progress</div>
    <>
      <BlogAccordion blogContent={BlogContent} />
    </>
  );
};

export default Blog;
