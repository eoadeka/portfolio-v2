import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { MdOutlineCancel } from "react-icons/md";

const Card = (props) => {
    const {data} = props;
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(1);
    const style = { fontSize: "1em", verticalAlign: "middle" };

    const Modal = props => {
        return (
            <div className="overlay">{props.children}</div>
        );
    };

    const handleClick = (index) => {
        // console.log(index.id);
        setSelected(index)
        setOpen(!open);
      };

    return (
      <div>
          {data.map((project,item) => (
              <div className='card' key={project.id} data-id={project.id}>
                  {/* <a className='card-link' href={project.url}> */}
                  <span className='card-link' id={project.id} onClick={() => handleClick(item)}>
                      <picture>
                          <img src={project.img} alt={project.title} width="250px" height="150px"></img>
                      </picture>
                      <div className='card-content'>
                          <h3>{project.title}</h3>
                          <p>{project.description}</p>
                          <p>{project.tools.slice(0,3).map((tool) => (
                            tool
                          )).join(", ")}</p>
                          <p className='card-span'><span>view</span> <span><FaArrowRight style={style} /></span></p>
                      </div>
                  </span>
                  {open && item===selected && (
                    <Modal in={!open}>
                        <MdOutlineCancel size="2em" onClick={handleClick} style={{position: "absolute", top: "2em", right: "2em"}} />
                        <div key={project.id}  className='overlay-content'>
                            {/* MAKE THIS OVERLAY DISAPPEAR!!! */}
                            <h2 style={{textAlign: "center"}}>{project.title}</h2>

                            <div className='contents'>
                                <div className='project project-picture'>
                                    <picture>
                                        <img className='project-img' src={project.img} alt={project.title} width="450px" height="400px" style={{filter:"grayscale(0%)"}}></img>
                                    </picture>
                                </div>
                                <div className='project project-tools'>
                                    {/* <p>Tech Used</p> */}
                                    <div className='filters'>
                                        {project.tools.map((tool) => (
                                            <button className='filters-btn'>{tool}</button>
                                        ))}
                                    </div>
                                </div>
                                <div className='project project-links'>
                                    {/* <p>Links</p> */}
                                    <h4>{project.description}.</h4>
                                    <p>read my blog on the project</p>
                                    <p>view on github</p>
                                    <p>view live site</p>
                                </div>
                                <div className='project project-live-demo'>
                                    {/* <p>Live demo</p> */}
                                    <picture>
                                        <img src={project.img} alt={project.title} width="685px" height="400px" style={{filter:"grayscale(0%)"}}></img>
                                    </picture>
                                </div>

                            </div>
                        </div>
                    </Modal>
                    )}
              </div>
          ))}
      </div>
    );
};

export default Card;
