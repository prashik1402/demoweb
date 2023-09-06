import React from 'react';
import './Home.css';
import frontendImage from '../images/frontend.jpg';
import reactImage from '../images/react.png';
import designImage from '../images/design.png';
import uiuxImage from '../images/uiux.jpg';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="home">
        <h1>Welcome to My Portfolio</h1>
        <p>
          I'm a passionate web developer who loves building amazing web
          applications. This is a brief introduction about myself.
        </p>
        <p>
          Here are some of the things I specialize in:
        </p>
        <ul className="specializations">
          <li id='frontend'>
          <img src={frontendImage} alt="Frontend Development" />
          <Link to="https://frontendmasters.com/guides/front-end-handbook/2018/what-is-a-FD.html" target="_blank">
            <p>Front-end Web Development</p>
           </Link>
          </li>
          <li id='react'>
          <img src={reactImage} alt="React.js and JavaScript" />
          <Link to="https://legacy.reactjs.org/" target="_blank">
            <p>React.js and Javascript</p>
           </Link>
          </li>
          <li id='design'>
          <img src={designImage} alt="Responsive web design" />
          <Link to="https://www.smashingmagazine.com/2011/01/guidelines-for-responsive-web-design/" target="_blank">
            <p>Responsive web design</p>
           </Link>
          </li>
          <li id='uiux'>
          <img src={uiuxImage} alt="UI/UX design" />
          <Link to="https://careerfoundry.com/en/blog/ux-design/the-difference-between-ux-and-ui-design-a-laymans-guide/" target="_blank">
            <p>UI/UX design</p>
           </Link>
            </li>
        </ul>
    </section>
  );
}

export default Home;
