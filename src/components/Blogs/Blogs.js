import React, { useEffect, useState } from 'react';
import './Blogs.css';
const Blogs = () => {
    const[blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('/blogs.json')
        .then(res=>res.json())
        .then(data => setBlogs(data));
    },[]);
    console.log(blogs);


    return (
        <div className="">
            <h2 className="blog-title container">Our Blogs</h2>
            <div className="row g-5 m-5 mt-0">
                {
                    blogs.map((blog=> 
                        <div key={blog.id} className="col-lg-4 col-md-6 col-12 mt-5">
                            <div className="blog">
                                <div className="thumb">
                                    <img src={blog.imageURL} alt="" />
                                </div>
                                <div className="blog-detail">
                                    <p className="course-item-heading"><small>{blogs.publishDate}</small></p>
                                    <h4>{blog.name}</h4>
                                    <p><small>{blog.description}</small></p>
                                </div>
                            </div>
                    </div>
                    ))}
            </div>
        </div>
    );
};

export default Blogs;