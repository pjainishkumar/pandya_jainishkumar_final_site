import React from 'react';
import './App.css';
import BasicInfo from './components/BasicInfo';
import Work from './components/Work';
import Skills from './components/Skills';
import Resources from './components/Resources';
import DeveloperSetup from './components/DeveloperSetup';

const App = () => (
  <div>
    <header>
      <h1>Jainishkumar Pandya's Portfolio</h1>
    </header>
    <div className="container">
      <BasicInfo />
      <Work
        title="E-commerce Website"
        description="Developed a full-featured e-commerce website using Ruby on Rails and React. Implemented user authentication, product listings, shopping cart, and payment gateway integration."
        image="/images/Ecom.png"
        link="https://github.com/pjainishkumar/ecommerce-site"
        techList={['Ruby on Rails', 'React', 'PostgreSQL', 'Stripe']}
      />
      <Work
        title="Portfolio Website"
        description="Created a personal portfolio website to showcase my projects and skills. The website is built with React and Dockerized for easy deployment."
        image="/images/portfolio.png"
        link="https://pandyajainish.github.io/"
        techList={['React', 'Docker', 'Nginx']}
      />
      <Skills
        description="Experienced in web development and passionate about building efficient and scalable web applications."
        languages={['JavaScript', 'Ruby', 'Python', 'HTML', 'CSS']}
        tools={['VSCode', 'Git', 'Docker', 'Nginx']}
      />
      <Resources
        title="React Documentation"
        summary="Comprehensive guide and reference for React."
        link="https://reactjs.org/docs/getting-started.html"
      />
      <Resources
        title="Docker Documentation"
        summary="Official Docker documentation and user guide."
        link="https://docs.docker.com/"
      />
      <DeveloperSetup />
    </div>
  </div>
);

export default App;
