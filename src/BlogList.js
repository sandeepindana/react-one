

// const blogs = [
//     { title: 'First Blog', body: 'This is first blog....', author: 'first', id: 1 },
//     { title: 'Second Blog', body: 'This is second blog....', author: 'second', id: 2 },
//     { title: 'Third Blog', body: 'This is third blog....', author: 'third', id: 3 },
// ];

import { Link } from "react-router-dom"

const BlogList = ({ blogs, title }) => {
    // , handleDelete   <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>
    // props
    // const blogs = props.blogs;
    // const title = props.title;

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default BlogList; 