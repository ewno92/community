import Head from "next/head";
import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Gallery from "../components/home/Gallery";
import HomeTable from "../components/home/HomeTable";

const Home = (props) => {
  const menu = [
    { title: "구인", props: props.jobs, link: "jobs" },
    { title: "사고&팔고", props: props.sale, link: "sale" },
    { title: "비지니스", props: props.realEstate },
    // { title: "사고&팔고", props: props.jobs },
    // { title: "비지니스", props: props.jobs },
  ];

  console.log(props);
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(props.data);
  }, []);

  if (data) return <div>Loading...</div>;
  return (
    <Container id="home">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Row className="py-4">
        {menu.map((item, i) => (
          <Col md={4} key={i} className="d-flex justify-content-center py-2">
            <div className="w-100">
              <HomeTable
                title={item.title}
                posts={item.props}
                link={item.link}
              />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

//fetch before rednering
export async function getServerSideProps(context) {
  const jobs = await axios
    .get("https://korean-community.herokuapp.com/api/ca/la/find-jobs/1")
    .then((res) => res.data);
  const sale = await axios
    .get("https://korean-community.herokuapp.com/api/ca/la/sales/:id")
    .then((res) => res.data);
  const realEstate = await axios
    .get("https://korean-community.herokuapp.com/api/ca/la/real-estates/:id")
    .then((res) => res.data);
  //return jobs and sales
  return {
    props: {
      jobs,
      sale,
      realEstate,
    },
  };
}

export default Home;
