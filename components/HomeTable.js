import React from "react";
import Link from "next/link";

const HomeTable = ({ title, jobs }) => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <Link href="/jobs">
            <th
              className="d-flex justify-content-between"
              scope="col"
              style={{ cursor: "pointer" }}
            >
              <span>{title}</span>
              <span>+</span>
            </th>
          </Link>
        </tr>
      </thead>
      <tbody>
        {jobs.splice(0, 4).map((job, index) => {
          return (
            <tr key={index}>
              <td style={{ cursor: "pointer", fontSize: "12px" }}>
                {job.title}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default HomeTable;
