import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const Jobs = (props) => {
  console.log(props);
  return (
    <Container className="container">
      <Row className="d-flex justify-content-center">
        <Col>
          <input type="text" placeholder="#" />
        </Col>
      </Row>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">location</th>
            <th scope="col">Category</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {props.jobs.map((job) => (
            <tr key={job.id}>
              <td>{job.title}</td>
              <td>{job.location}</td>
              <td>{job.category}</td>
              <td>{job.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};
export async function getServerSideProps(context) {
  const res = await fetch("https://korean-community.herokuapp.com/find-jobs/1");
  const jobs = await res.json();
  return { props: { jobs } };
}

export default Jobs;
