import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import Router from "next/router";
const Jobs = (props) => {
  console.log(props);
  const [search, setSearch] = useState([""]);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const [menu, setMenu] = useState([]);

  useEffect(() => {
    createMenu();
  }, []);

  const createMenu = () => {
    let tempMenu = [];
    let count = {};
    props.jobs.forEach((job) => {
      if (!count[job.category]) {
        count[job.category] = 1;
      } else {
        count[job.category] += 1;
      }
    });
    for (let key in count) {
      if (key !== "기타 ") tempMenu.push(key);
    }
    tempMenu.push("기타 ");
    setMenu(tempMenu);
  };

  return (
    <Container id="jobs" className="container" style={{ maxWidth: "800px" }}>
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
            전체 ({props.jobs.length})
          </button>
        </li>

        {/* tab menu */}
        {menu.map((key) => {
          return (
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id={`"${key}-tab"`}
                data-bs-toggle="tab"
                data-bs-target={`#${key}`}
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                {key} ({key.length})
              </button>
            </li>
          );
        })}
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

        {menu.map((key) => {
          return (
            <div
              className="tab-pane fade"
              id={key}
              role="tabpanel"
              aria-labelledby={`${key}-tab`}
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
                  {props.jobs.map((job) => {
                    if (job.category === key) {
                      return (
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
                      );
                    }
                  })}
                </tbody>
              </table>
            </div>
          );
        })}
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
