import React, { useEffect } from "react";
import Link from "next/link";

const HomeTable = ({ title, jobs }) => {
  const jobsCopy = [...jobs];

  return (
    <table id="home-table" className="table table-hover">
      <thead>
        <tr>
          <Link href="/jobs">
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
        {jobsCopy.splice(0, 3).map((job, index) => {
          return (
            <tr key={index}>
              <td style={{ cursor: "pointer", fontSize: "12px" }}>
                <p>{job.title}</p>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default HomeTable;
