import { useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import Router from "next/router";
const Jobs = (props) => {
  const [search, setSearch] = useState([""]);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  console.log(props);

  return (
    <Container id="jobs" className="container">
      <Row>
        <Col className="d-flex justify-content-center p-3">
          <input
            type="text"
            placeholder="#Search"
            value={search}
            onChange={handleSearch}
          />
        </Col>
      </Row>

      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            전체
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Profile
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact"
            type="button"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >
            Contact
          </button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
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
                <tr
                  key={job.id}
                  style={{ cursor: "pointer" }}
                  onClick={() => Router.push(`/jobs/ca/post/${job.id}`)}
                >
                  <td>
                    <span>{job.title}</span>
                  </td>
                  <td>
                    <span>{job.location}</span>
                  </td>
                  <td>
                    <span>{job.category}</span>
                  </td>
                  <td>
                    <span>{job.date}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div
          className="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          ...
        </div>
        <div
          className="tab-pane fade"
          id="contact"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          ...
        </div>
      </div>
    </Container>
  );
};
export async function getServerSideProps(context) {
  const jobs = await axios
    .get("https://korean-community.herokuapp.com/api/ca/la/find-jobs/1")
    .then((res) => res.data);
  return { props: { jobs } };
}

export default Jobs;
