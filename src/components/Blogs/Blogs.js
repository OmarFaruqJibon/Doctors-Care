import React, { useEffect, useState } from 'react';
import './Blogs.css';
const Blogs = () => {
    const[blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('/blogs.json')
        .then(res=>res.json())
        .then(data => setBlogs(data));
    },[]);

    return (
        <div className="mt-5">
            <h1 className="blog-title container fw-bolder">Our Blogs</h1>
            <p className="text-center"><small>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia</small></p>
            
            <div className="row g-5 m-5 mt-0">
                {
                    blogs.map((blog=> 
                        <div key={blog._id} className="col-lg-4 col-md-6 col-12">
                            <div className="blog">
                                <div className="thumb">
                                    <img src={blog.imageURL} alt="" />
                                </div>
                                <div className="blog-detail">
                                    <p className="course-item-heading"><small className="publish-date">{blog.publishDate}</small></p>
                                    <h4>{blog.name}</h4>
                                    <p><small>{blog.description}</small></p>
                                </div>
                                <div className="text-center">
                                    <button className="btn detail-btn">Learn More</button>
                                </div>
                                
                            </div>
                    </div>
                    ))}
            </div>
        </div>
    );
};

export default Blogs;