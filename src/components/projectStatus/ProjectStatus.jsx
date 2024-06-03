import React from "react";
import projectData from "./projectData.json";

const ProjectStatus = () => {
  return (
    <div className="card stretch-card">
        <div className="card-body">
          <div className="justify-content-between">
            <h5 className="card-title">Project status</h5>
            <table className="table">
              <tbody>
                {projectData.map((project, index) => (
                  <tr key={index}>
                    <td  className="py-2 px-4">
                      <div className="d-flex align-items-center">
                        <img
                          src={project.logo}
                          alt="img"
                          className="mr-1 px-2"
                          style={{ maxWidth: "50px" }}
                        />
                        <div className="d-flex flex-column">
                          <span>Company</span>
                          <span className="fw-semibold">{project.company}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-2 px-4">
                      <div className="d-flex flex-column">
                        <span>Budget</span>
                        <span className="fw-semibold">{project.budget}</span>
                      </div>
                    </td>
                    <td className="py-2 px-4">
                      <div className="d-flex flex-column">
                        <span>Status</span>
                        <span className="text-success">{project.status}</span>
                      </div>
                    </td>
                    <td className="py-2 px-4">
                      <div className="d-flex flex-column">
                        <span>Deadline</span>
                        <span className="fw-semibold">{project.deadline}</span>
                      </div>
                    </td>
                    <td className="py-2 px-4">
                      <div className="d-flex flex-column">
                        <button className="button-custom">Edit Actions</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
    </div>
  );
};

export default ProjectStatus;
