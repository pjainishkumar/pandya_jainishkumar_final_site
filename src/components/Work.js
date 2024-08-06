
import React from 'react';

const Work = ({ title, description, image, link, techList }) => (
  <section>
    <h2>Work</h2>
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      {image && <img src={image} alt={title} />}
      {link && <a href={link}>View Project</a>}
      {techList && <ul>{techList.map((tech, index) => <li key={index}>{tech}</li>)}</ul>}
    </div>
  </section>
);

export default Work;
