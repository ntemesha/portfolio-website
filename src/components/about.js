import React from 'react';
import ntem from "../assets/img/me.jpg";


const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-me-content">
          <div className="about-me-text">
            <p>
              Hi, I’m <span className="highlight">Ntemesha Ntambu</span>, a passionate computer science student majoring in artificial intelligence at Swinburne University of Technology Malaysia. I’m nearing graduation and eager to make an impact in the tech industry. My journey has taken me across seven countries, from Zambia to Malaysia, and I’ve developed a strong foundation in web development, particularly with technologies like React and Laravel.
            </p>
            <p>
              I’ve had the opportunity to intern at organizations like SRDC and GLC Networks Indonesia, where I honed my skills in developing platforms and websites. In my free time, I run a business called Eden and work on exciting projects, including event management and website development for various clients.
            </p>
            <p>
              Feel free to explore my work and connect with me through the links below. I’m always open to new opportunities and collaborations!
            </p>
          </div>
          <div className="about-me-image">
            <img src={ntem} alt="Ntemesha Ntambu" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
