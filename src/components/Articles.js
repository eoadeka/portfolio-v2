import React from "react";
import { useState, useEffect } from "react";
import { MdArrowOutward } from "react-icons/md";


const Blog = () => {
    const [posts, setPosts] = useState([]);
    const style = { fontSize: "1em", verticalAlign: "middle" };

    const Secret_KEY = `process.env.DEV_KEY`

    const query = `
        query {
            user(username: "ellaadeka") {
            publication {
                posts(page:0){
                slug
                title
                brief
                coverImage
                cuid
                _id
                }
            }
            }
        }
        `; //as used in the playground

    useEffect(() => {
        fetchPosts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); //we are maintaining side effects here. since we are making an API call in react
    
    
    const fetchPosts = async () => {

        const response = await fetch("https://api.hashnode.com/", {
          method: "POST",
          headers: {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin' : '*',
            // "Access-Control-Allow-Headers": "*",
            // "Access-Control-Allow-Origin": "*",
            // "Access-Control-Allow-Methods": "*" ,
            "Authorization": `Bearer ${Secret_KEY}`, //if you're using token
          },
          body: JSON.stringify({ query }),
        });

        const data = await response.json();
        // console.log(data);
        setPosts(data.data.user.publication.posts);
        console.log(data.data.user.publication.posts);
    };

    return (
        <div>
            {posts.slice(0,4).map((post) => (
                <div className='card' key={post.id}>
                    <a className='card-link' href={`https://ellaadeka.hashnode.dev//${post.slug}`} target="_blank" rel="noreferrer">
                        <picture>
                            <img  src={post.coverImage} alt={post.title} width="250px" height="150px"></img>
                        </picture>
                        <div className='card-content'>
                            <h3>{post.title}</h3>
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
