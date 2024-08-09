import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import OOP from "../assets/img/TalentTest.png";
import dataStructures from "../assets/img/data-structures.png";
import research from "../assets/img/research.png";
import NLP from "../assets/img/NLP.png";
import MSP from "../assets/img/MSP.png";
import cisco from "../assets/img/cisco.png";
import SRDC from "../assets/img/SRDC.jpg";
import regal from "../assets/img/regal.png";
import GLC from "../assets/img/GLC.jpeg";

import eden from "../assets/img/eden.jpg";
import china from "../assets/img/china.jpg";
import haus from "../assets/img/haus.jpg";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Game Development Project (C# and SplashKit):",
      description: "Designed, developed, and implemented a complete game using OOP principles, showcasing proficiency in C# programming, game logic implementation, and user interface design.",
      imgUrl: OOP,
    },
    {
      title: "Hangman Game Application",
      description: "Designed and implemented a Hangman game application in C++, showcasing proficiency in OOP, data structures (arrays, linked lists, trees), and design patterns (Iterator). Successfully tackled challenges related to polymorphism and dynamic data management.",
      imgUrl: dataStructures,
    },
    {
      title: "Cybersecurity Research | Phishing Analysis and Mitigation",
      description: "Conducted in-depth research on phishing attacks, exploring various types, their impact, and countermeasures. Utilized the BlackEye tool to simulate phishing scenarios and evaluate the effectiveness of security tools in a controlled environment. The research enhanced my understanding of phishing techniques, attacker methodologies, and the importance of user awareness and robust security measures in combating these threats.",
      imgUrl: research,
    },
    {
      title: "E-commerce Product Categorization using NLP",
      description: "I developed an NLP classifier to categorize products based on their textual descriptions. The project involved exploratory data analysis (EDA) to understand the dataset, preprocessing techniques like tokenization and stopword removal, and the implementation of a Convolutional Neural Network (CNN) model for classification. I evaluated the model's performance using metrics like classification reports and confusion matrices, and further tested it on real-world product descriptions.",
      imgUrl: NLP,
    },
    {
      title: "Software Project Management & Development",
      description: "Successfully collaborated with a team of four to deliver a software project using Scrum methodology. Demonstrated proficiency in project planning, task breakdown, and risk management. Utilized tools and techniques for software design, development.",
      imgUrl: MSP,
    },
    {
      title: "Cisco Certified Network Associate (CCNA)",
      description: "Completed the Cisco Introduction to Networks course, gaining knowledge in networking concepts such as IP addressing, Ethernet protocols, and device configuration. Acquired hands-on experience through 54 labs using Cisco hardware and Packet Tracer",
      imgUrl: cisco,
    },
  ];



  const Professional = [
    {
      title: "Internship at Sarawak Research and Development Counsil",
      description: "At SRDC, a government organization focused on research grants, I developed a comprehensive platform using PHP, Laravel, React, HTML, CSS, and Bootstrap. I also integrated an AI chatbot with the ChatGPT API, enhancing the platform’s functionality and user interaction. This internship provided me with practical experience in building and deploying technology solutions in a government setting.",
      imgUrl: SRDC,
    },
    {
      title: "Freelance Work for Regal Vintage",
      description: "For Regal Vintage, a clothing brand with a presence in the UK and Japan, I developed and managed their website, integrating key features like payment gateways, an add-to-cart function, and a chatbox. I also enhanced the site with 3D elements.",
      imgUrl: regal,
    },
    {
      title: "Internship at GLC Networks Indonesia",
      description: "At GLC Networks Indonesia, I worked on developing websites for large organizations, including universities. Utilizing Scriptcase software, I gained experience in building robust, scalable web solutions tailored to the needs of prominent institutions.",
      imgUrl: GLC,
    },
  ];


  const Personal = [
    {
      title: "Founder of EDEN",
      description: "As the founder of Eden, I've spearheaded a variety of innovative projects that blend creativity and technology. From developing engaging digital solutions to organizing impactful events, my role involves overseeing all aspects of the business, from strategic planning to execution. Eden represents my commitment to driving positive change through entrepreneurial ventures, combining my passion for technology with a strong focus on delivering exceptional results.",
      imgUrl: eden,
    },
    {
      title: "Travels",
      description: "My extensive travels across seven countries—Malaysia, Zambia, Singapore, Indonesia, Cambodia, China, and Thailand—have enriched my life with diverse cultural experiences and perspectives. These journeys have not only broadened my horizons but also deepened my adaptability and understanding of global dynamics, influencing both my personal growth and professional approach.",
      imgUrl: china,
    },
    {
      title: "Community Service",
      description: "During my time with Haus, I engaged in meaningful community service aimed at supporting and uplifting local initiatives. My contributions involved organizing events, providing hands-on assistance, and working closely with community members to address their needs. This experience allowed me to apply my skills in a real-world context, fostering a strong sense of community and making a positive impact on those we served.",
      imgUrl: haus,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>My Greatest Achievemnts</h2>
                <p>Welcome to the highlight reel of my journey, showcasing my accomplishments in education, profession, and personal growth.
                    <br/><br/>
                    Educational Achievements:
                    I've pursued a major in artificial intelligence at Swinburne University of Technology, where I've achieved academic excellence and embraced a love for learning.
                    <br/><br/>
                    Professional Achievements:
                    As the founder of Eden, I've worked on innovative projects and collaborated with diverse teams to create impactful solutions that blend technology and creativity.
                    <br/><br/>
                    Personal Achievements:
                    Living in seven countries and exploring different cultures has enriched my life, fueling my passion for exploration, resilience, and building meaningful connections.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Education</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Profession</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Personal</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          Professional.map((professional, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...professional}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          Personal.map((personal, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...personal}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}