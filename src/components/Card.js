import React, { useState } from 'react';
// import { FaArrowRight } from 'react-icons/fa';
import { MdOutlineCancel, MdArrowOutward } from "react-icons/md";

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
                      <picture className='project-pict'>
                          <img className='project-image' src={project.thumbnail} alt={project.title} width="250px" height="150px"></img>
                          {project.comingSoon === true && <div className="coming-soon-overlay">coming soon</div>}
                      </picture>
                      <div className='card-content'>
                          <h3>{project.title}</h3>
                          <p>{project.description}</p>
                          <small>{project.tools.slice(0,3).map((tool) => (
                            tool
                          )).join(", ")}</small>
                          <p className='card-span'><span>view</span> <span><MdArrowOutward style={style} /></span></p>
                      </div>
                  </span>
                  {open && item===selected && (
                    <Modal in={!open}>
                        <MdOutlineCancel className='cancel' size="2em" onClick={handleClick} style={{position: "absolute", top: "2em", right: "2em"}} />
                        <div key={project.id}  className='overlay-content'>
                            {/* MAKE THIS OVERLAY DISAPPEAR!!! */}
                            <h2 style={{textAlign: "center"}}>{project.title}{project.comingSoon === true && <sup className='sup-coming-soon' style={{fontSize: "15px", background: "#28104e",color: "lavender", borderRadius: "10px", padding:"5px"}}>coming soon</sup>}</h2>

                            <div className='contents'>
                                <div className='project project-picture'>
                                    <picture>
                                        <img className='project-img' src={project.img} alt={project.title} width="450px" height="420px" style={{filter:"grayscale(0%)", objectFit: "fit", objectPosition: "top"}}></img>
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
                                    <a href={project.blogLink} target="_blank" rel="noreferrer" style={{ visibility: project.blogLink ? 'visible' : 'hidden' }}><MdArrowOutward style={style} /> read my blog on the project</a><br></br>
                                    <a href={project.githubLink} target="_blank" rel="noreferrer" style={{ visibility: project.githubLink ? 'visible' : 'hidden' }}><MdArrowOutward style={style} /> view code on github</a><br></br>
                                    <a href={project.liveSite} target="_blank" rel="noreferrer" style={{ visibility: project.liveSite ? 'visible' : 'hidden' }}><MdArrowOutward style={style} /> view live site</a>
                                </div>
                                <div className='project project-live-demo'>
                                    {/* <p>Live demo</p> */}
                                    <picture>
                                        <img className='liveDemo-img' src={project.liveDemo} alt={project.title} width="685px" height="430px" style={{filter:"grayscale(0%)"}}></img>
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
