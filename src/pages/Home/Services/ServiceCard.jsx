import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ServiceCard = ({service}) => {
    const {_id,title,img,price} = service;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={img}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>Price: ${price}</p>
          <div className="card-actions justify-end">
            <Link to={`/checkout/${_id}`}><button className="btn btn-primary">Book Now</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {};

export default ServiceCard;
