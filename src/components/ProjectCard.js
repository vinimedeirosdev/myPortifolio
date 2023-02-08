import React from "react";
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, site }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <a href={site}>
        <img src={imgUrl} />
        <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
        </div>
        </a>
      </div>
    </Col>
  );
};
