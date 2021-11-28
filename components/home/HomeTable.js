import React, { useEffect } from "react";
import Link from "next/link";
import Router from "next/router";

const HomeTable = ({ title, posts, link }) => {
  const postsCopy = [...posts];
  return (
    <table id="home-table" className="table">
      <thead>
        <tr>
          <Link href={`/${link}`}>
            <th
              className="d-flex justify-content-between header-container"
              scope="col"
            >
              <span className="title">{title}</span>
              <span className="icon">+</span>
            </th>
          </Link>
        </tr>
      </thead>
      <tbody>
        {postsCopy.splice(0, 3).map((post, index) => {
          return (
            <tr key={index}>
              <td
                style={{ cursor: "pointer", fontSize: "12px" }}
                onClick={() => Router.push(`/jobs/ca/post/${post.id}`)}
              >
                <p>{post.title} </p>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default HomeTable;
