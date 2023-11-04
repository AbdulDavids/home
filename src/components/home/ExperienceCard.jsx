import React from 'react';

import {
  Col,
} from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="6">
      <div className="pb-5 text-center">
      <img
  className="bg-white mb-3"
  src={data.companylogo}
  alt=""
  width="100"
  height="100"
  style={{
    borderRadius: '50%', // Makes the image circular
    objectFit: 'cover', // Maintains the aspect ratio of the image
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)', // Adds a drop shadow below the image
  }}
/>



        <p className="lead">
          {data.role}
          <br />
          {data.date}
        </p>

      </div>
    </Col>
  );
}

export default ExperienceCard;