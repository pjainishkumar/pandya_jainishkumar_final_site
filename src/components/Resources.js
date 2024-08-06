
import React from 'react';

const Resources = ({ title, image, summary, link }) => (
  <section>
    <h2>Resources</h2>
    <div>
      <h3>{title}</h3>
      {image && <img src={image} alt={title} />}
      <p>{summary}</p>
      {link && <a href={link}>Learn More</a>}
    </div>
  </section>
);

export default Resources;
