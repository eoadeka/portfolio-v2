import React from "react";
import { MdArrowOutward } from "react-icons/md";
import posts from "../data/articlesData"


const Blog = () => {
    const style = { fontSize: "1em", verticalAlign: "middle" };
    // console.log(posts)

    return (
        <div>
            {posts.slice(0,4).map((post) => (
                <div className='card' key={post.id}>
                    <a className='card-link' href={post.node.url} target="_blank" rel="noreferrer">
                        <picture>
                            <img  src={post.node.coverImage.url} alt={post.title} width="250px" height="150px"></img>
                        </picture>
                        <div className='card-content'>
                            <h3>{post.node.title}</h3>
                            <br></br>
                            <br></br>
                            <p className='card-span'><span>read more</span> <span><MdArrowOutward style={style} /></span></p>
                        </div>
                    </a>
                </div>
            ))}
        </div>
    );
};


export default Blog;
