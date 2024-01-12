import React, { useState, useEffect } from 'react';

const HasnodeArticles = () => {
  const [articles, setArticles] = useState([]);

 const Secret_KEY = process.env.MY_DEV_KEY;

 useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.hashnode.com/v1/me/articles',  {mode:'cors'}, {
          headers: {
            Authorization: Secret_KEY
          }
        });
        const data = await response.json();
        setArticles(data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {articles.map(article => (
        <div key={article._id}>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
 <p><a href={article.url}>Read more</a> </p>
        </div>
      ))}
    </div>
  );
};

export default HasnodeArticles;
