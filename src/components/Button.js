import React, { useState, useEffect } from 'react';

const Button = (props) => {
  const {data} = props;



  return (
    <div>
        {data.projects.map((project) => (
            <div className='card' key={project._id}>
                <a href={project.url}>
                    <picture>
                        <img src={img1} alt='pic1' width="250px"></img>
                    </picture>
                    <div className='card-content'>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <p>{project.tools}</p>
                    </div>
                </a>
            </div>
        ))}
    </div>
  );
};

export default Button;
