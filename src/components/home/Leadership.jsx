import React, { useState, useEffect, Profiler } from "react";
import Carousel from "react-bootstrap/Carousel";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

const Leadership = ({ heading, message, message2, message3, img, imageSize }) => {
  return (
    <div
      id="leadership"
      className="jumbotron jumbotron-fluid m-0"
      style={{ backgroundColor: "white" }}
    >
      <div className="container container-fluid">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <div className="row">
        {/*<div className="row">*/}
          <Jumbotron fluid id="leadership" className="bg-light m-0">
            <Container className="">
          <div className="col-md-5">
            <p className="lead" style={{color:"olive"}}>{message}</p>
          </div>
            </Container>
          </Jumbotron>

          {/*<div className="card-body"><h5 className="card-title">BinarySearchTree </h5><p className="card-text"></p><a*/}
          {/*    href="https://github.com/souvikdas0718/BinarySearchTree/archive/master.zip"*/}
          {/*    className="btn btn-outline-secondary mr-3"><i className="fab fa-github"></i> Clone Project</a><a*/}
          {/*    href="https://github.com/souvikdas0718/BinarySearchTree" target=" _blank"*/}
          {/*    className="btn btn-outline-secondary"><i className="fab fa-github"></i> Repo</a>*/}
          {/*  <hr>*/}
          {/*    <div className="pb-3">Languages: <a className="badge badge-light card-link"*/}
          {/*                                        href="https://github.com/souvikdas0718/BinarySearchTree/search?l=Java"*/}
          {/*                                        target=" _blank">Java: 100 %</a></div>*/}
          {/*    <p className="card-text"><a href="https://github.com/souvikdas0718/BinarySearchTree/stargazers"*/}
          {/*                                target=" _blank" className="text-dark text-decoration-none"><span*/}
          {/*        className="text-dark card-link mr-4"><i className="fab fa-github"></i> Stars <span*/}
          {/*        className="badge badge-dark">0</span></span></a><small className="text-muted">Updated on January 9,*/}
          {/*      2021</small></p>*/}
          {/*</div>*/}

          <div className="col-md-5">
            <p className="lead">{message2}</p>
          </div>
          <div className="col-md-5">
            <p className="lead">{message3}</p>
          </div>
          <div className="col-md-7">
            <Carousel>
              {img.map((value, index) => {
                return (
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={value.img}
                      alt="First slide"
                      width={imageSize.width}
                      height={imageSize.height}
                    />
                    <Carousel.Caption>
                      <h3>{value.label}</h3>
                      <p>
                        {value.paragraph}
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
