import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Blog = () => {
    const { blogId} = useParams();
    const[blog, setBlog] = useState([]);
    console.log(blogId, blog._id);

    useEffect(() => {
        fetch('/blogs.json')
        .then(res=>res.json())
        .then(data => setBlog(data));
    },[]);

    const ExactItem = blog.filter(bg => bg._id === blogId);

    return (
        
        <div className="overflow-hidden m-3">
            <div className="service-container row gx-md-5">
            <div className="service-thumb col-md-5 col-12">
                    <img src={ExactItem[0]?.imageURL} alt="" />
                </div>
                <div className="ms-md-4 mt-4 mt-md-0 col-md-5 col-12">
                    <p><small className="bg-dark text-white p-2">{ExactItem[0]?.publishDate}</small></p>
                    <h3>Title: {ExactItem[0]?.name}</h3>
                    <p><small> Description: {ExactItem[0]?.description}</small></p>
                </div>
            </div>
        </div>
    );
};

export default Blog;