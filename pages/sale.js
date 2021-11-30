import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import Router from "next/router";

const Sale = (props) => {
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
    let temp = new Set();
    props.jobs.forEach((post) => {
      if (post.type.includes("/")) {
        temp.add(post.type.replace("/", "-"));
      } else {
        temp.add(post.type);
      }
    });
    setMenu([...temp]);
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
        {menu.map((item, i) => {
          return (
            <li key={i} className="nav-item" role="presentation">
              <button
                key={i}
                className="nav-link"
                id={`"${item}-tab"`}
                data-bs-toggle="tab"
                data-bs-target={`#${item}`}
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                {item}
              </button>
            </li>
          );
        })}
      </ul>

      {/* home tab */}
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
                <th scope="col">Type</th>
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
                    <span>
                      {job.title}

                      <img src={job.img} alt="" />
                    </span>
                  </td>
                  <td>
                    <span>{job.location}</span>
                  </td>
                  <td>
                    <span>{job.type}</span>
                  </td>
                  <td>
                    <span>{job.date}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* tab menu */}
        {menu.map((menuItem, i) => {
          return (
            <div
              key={i}
              className="tab-pane fade"
              id={menuItem}
              role="tabpanel"
              aria-labelledby={`${menuItem}-tab`}
            >
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th scope="col">Title</th>
                    <th scope="col">location</th>
                    <th scope="col">type</th>
                    <th scope="col">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {props.jobs.map((job) => {
                    if (job.type.replace("/", "-") === menuItem) {
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
                            <span>{job.type}</span>
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
  const sales = await axios
    .get("https://korean-community.herokuapp.com/api/ca/la/sales/:id")
    .then((res) => res.data);

  return { props: { jobs: sales } };
}

export default Sale;
