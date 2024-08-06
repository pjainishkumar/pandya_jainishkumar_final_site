
import React from 'react';

const Skills = ({ description, languages, tools }) => (
  <section>
    <h2>Skills</h2>
    <p>{description}</p>
    <h3>Languages/Frameworks:</h3>
    <ul>{languages.map((lang, index) => <li key={index}>{lang}</li>)}</ul>
    <h3>Tools:</h3>
    <ul>{tools.map((tool, index) => <li key={index}>{tool}</li>)}</ul>
  </section>
);

export default Skills;
