import React from "react";

function ProjectItem({ name, about, technologies }) {
  const techlist = technologies.map((techObj)=> (
      <span key={techObj}>{techObj}</span>
  ))
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">{techlist}</div>
    </div>
  );
}

export default ProjectItem;
