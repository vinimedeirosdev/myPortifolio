import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg0 from "../assets/img/projImg0.png";
import projImg1 from "../assets/img/projImg1.png";
import projImg2 from "../assets/img/projImg2.png";
import projImg3 from "../assets/img/projImg3.png";
import projImg4 from "../assets/img/projImg4.png";
import projImg5 from "../assets/img/projImg5.png";
import projImg6 from "../assets/img/projImg6.png";
import projImg7 from "../assets/img/projImg7.png";
import projImg8 from "../assets/img/projImg8.png";

export const Projects = () => {
  const projects = [
    {
      title: "TodoList",
      description:
        " A TodoList made with ReactJS for you to write down your tasks.",
      imgUrl: projImg8,
      site:"https://vinistrife.github.io/TodoList/",
    },
    {
      title: "The Last Of Us - MemoryGame",
      description: " A Memory game based on The Last Of Us made with ReactJS.",
      imgUrl: projImg7,
      site:"https://vinistrife.github.io/TLOU_MemoryGame/",
    },
    {
      title: "GodOfGames",
      description:
        " A game listing site developed with PHP and MySQL, where we can create an account and add games, reviews and ratings.",
      imgUrl: projImg6,
      site:"https://github.com/ViniStrife/GodOfGames",
    },
    {
      title: "MyAgenda",
      description:
        " A phonebook made with PHP and Mysql (as a database) that you can add, edit or delete a person's contact.",
      imgUrl: projImg5,
      site:"https://github.com/ViniStrife/MyAgenda_php",
    },
    {
      title: "Tv Review",
      description: " Blog design using 'PHP', fully responsive with mobile!",
      imgUrl: projImg4,
      site:"https://github.com/ViniStrife/TvReview-PHP_blog-",
    },
    {
      title: "Notice Wall",
      description:
        " A Notice Wall made with NodeJS for you to write down your tasks.",
      imgUrl: projImg3,
      site:"https://github.com/ViniStrife/NoticeWall-NodeJS-",
    },
    {
      title: "AdventureTime MemoryGame",
      description: " A Memory game based on Adventure Time make with Javascript.",
      imgUrl: projImg2,
      site:"https://vinistrife.github.io/MatchGame_AdventureTime/",
    },
    {
      title: "Pokedex",
      description: " Pokedex Project using: HTML, CSS, JavaScript and PokeAPI!",
      imgUrl: projImg1,
      site:"https://vinistrife.github.io/Pokedex/",
    },
    {
      title: "TicTacToe",
      description: " Simple TicTacToe using HTML, CSS and JavaScript.",
      imgUrl: projImg0,
      site:"https://vinistrife.github.io/TicTacToe/",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>My projects done so far.</p>
            <Row>
              {projects.map((project, index) => {
                return <ProjectCard key={index} {...project} />;
              })}
            </Row>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
