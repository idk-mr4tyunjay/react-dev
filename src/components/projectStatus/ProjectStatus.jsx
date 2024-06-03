import React from "react";
import projectData from "./projectData.json";

const ProjectStatus = () => {
  return (
    <div className="card stretch-card">
      <div className="card-body">
        <div className="justify-content-between">
          <h5 className="card-title">Project status</h5>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Logo</th>
                  <th>Company</th>
                  <th>Budget</th>
                  <th>Status</th>
                  <th>Deadline</th>
                  <th>Edit Actions</th>
                </tr>
              </thead>
              <tbody>
                {projectData.map((project, index) => (
                  <tr key={index}>
                    <td><img style={{ maxWidth: "50px" }} src={project.logo} alt="logo" /></td>
                    <td>{project.company}</td>
                    <td>{project.budget}</td>
                    <td>{project.status}</td>
                    <td>{project.deadline}</td>
                    <td>
                      <button className="button-custom">Edit Actions</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectStatus;
