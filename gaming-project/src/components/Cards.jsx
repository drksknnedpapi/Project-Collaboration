// Card.js
import React from 'react';
import '../style/Card.css'; // Import CSS for styling

const Card = ({ image, title, content }) => {
  return (
    <div className="card" style={{ backgroundImage: `url(${image})` }}>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Card;
