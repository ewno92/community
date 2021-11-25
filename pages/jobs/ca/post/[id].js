import React from "react";
import Head from "next/head";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";

import { BsEyeFill } from "react-icons/bs";
//https://react-icons.github.io/react-icons/

const Index = ({ post }) => {
  console.log(post);
  return (
    <Container style={{ maxWidth: "800px" }}>
      <Row>
        <Col>
          <h2 className="my-2">{post.title}</h2>
        </Col>
      </Row>

      <Row className="bg-light border-top">
        <Col className="d-flex justify-content-between py-2">
          <span>{post.author}</span>
          <span>{post.date}</span>
        </Col>
      </Row>
      <Row>
        <Col>
          <BsEyeFill color="gray" />
          <span className="px-1">{post.views}</span>
        </Col>
      </Row>
      <Row className="pt-2">
        <span>{post.category}</span>
        <span>{post.location}</span>
        <span>{post.phone}</span>
      </Row>
    </Container>
  );
};

export const getServerSideProps = async (context) => {
  const { id } = context.query;
  console.log(id);
  const post = await axios
    .get(`https://korean-community.herokuapp.com/api/ca/la/find-job/${id}`)
    .then((res) => res.data);
  return { props: { post } };
};

export default Index;
