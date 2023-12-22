import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const CheckOut = props => {
    const service = useLoaderData();
    console.log(service)
    const {title,_id,price,img} = service;
    const {user} = useContext(AuthContext)

    const handleBookService = e=>{
        e.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const booking = {
            customerName:name,
            email,
            img,
            date,
            service:title,
            service_id:_id,
            price:price
        }
        console.log(booking)
        fetch('http://localhost:5000/bookings', {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data,data.insertedId);
      });
    }

    return (
       <div>
        <h2>Book Service: {service.title}</h2>
         <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-3xl font-extrabold">Add Coffee</h2>
      <form onSubmit={handleBookService}>
        <div className="md:flex">
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered w-full"
                defaultValue={user?.displayName}
              />
            </label>
          </div>

          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <label className="input-group">
              <input
                type="date"
                placeholder="Available Quantity"
                name="date"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/*  */}
        </div>
        <div className="md:flex">
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered w-full"
                defaultValue={user?.email}
              />
            </label>
          </div>

          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Due Amount</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Taste"
                className="input input-bordered w-full"
                defaultValue={'$'+ price}
              />
            </label>
          </div>
        </div>

        

        <div className="">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Photo URL"
                name="photo"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <input
          className="btn btn-block"
          type="submit"
          name=""
          id=""
          value="Order Confirm"
        />
      </form>
    </div>
       </div>
    );
};

CheckOut.propTypes = {
    
};

export default CheckOut;