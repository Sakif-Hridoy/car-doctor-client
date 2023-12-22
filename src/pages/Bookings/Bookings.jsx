import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from '../../providers/AuthProviders';
import BookingRow from './BookingRow';

const Bookings = props => {
    const {user} = useContext(AuthContext)
    const [bookings,setBookings] = useState([])

    const url = `http://localhost:5000/bookings?email=${user.email}`

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setBookings(data))
    },[])

    return (
        <div>
            <h2>Your Bookings:{bookings.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Image</th>
        <th>Service</th>
        <th>Date</th>
        <th>Price</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        bookings.map(booking=><BookingRow key={booking._id} booking={booking}></BookingRow>)
      }
    </tbody>
    {/* foot */}
    
  </table>
</div>
        </div>
    );
};

Bookings.propTypes = {
    
};

export default Bookings;