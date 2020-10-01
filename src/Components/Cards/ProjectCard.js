import React from "react";

function ProjectCard() {
  return (
    <>
      <div className="project-card">
        <div className="col">
          <div className="project-img">
            Project Image
            <div className="isbooking">Booking open</div>
          </div>
          <p className="project-title">Shivansh Residency</p>
          <p className="project-address">Rajesh Nagar Aurangabad</p>
          <p className="project-description">
            2BHK luxerios flats
            <br />
            90 meters from beed bypass highway
            <br />
            Only 5 flats in building
            <br />
          </p>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
