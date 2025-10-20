import React from "react";

import { useIntl } from "react-intl";

// import { BlogContent } from "data/Data";

import BlogAccordion from "components/blog-accordion/BlogAccordion";

const Blog = () => {
	const t = useIntl();
	return (
		// <div style={{ minHeight: 'calc(100vh-128px)' }}>Blog ...in progress</div>
		<>
			<BlogAccordion
				blogContent={{
					title: t.formatMessage({ id: "blog.pantone.title" }),
					description: [
						t.formatMessage({ id: "blog.pantone.description.line1" }),
						t.formatMessage({ id: "blog.pantone.description.line2" }),
					],
				}}
			/>
			<BlogAccordion
				blogContent={{
					title: t.formatMessage({ id: "blog.lighthouse.title" }),
					description: [
						t.formatMessage({ id: "blog.lighthouse.description.line1" }),
						t.formatMessage({ id: "blog.lighthouse.description.line2" }),
					],
				}}
			/>
		</>
	);
};

export default Blog;
