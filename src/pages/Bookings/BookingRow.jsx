import React, { useState } from 'react';
import PropTypes from 'prop-types';

const BookingRow = ({booking,handleDelete,handleBookingConfirm}) => {
    const {_id,customerName,email,date,service,price,status} = booking;
  

    

    return (
        <tr>
        <th>
          <label>
          <button onClick={()=>handleDelete(_id)} className="btn btn-square">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
          </label>
        </th>
        <td>
          
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
        </td>
        <td>
          {customerName}
        </td>
        <td>{email}</td>
        <td>{price}</td>
        <th>
          {status === 'confirm'? <h2 className='font-bold text-blue-800'>Confirmed</h2> : <button onClick={()=>handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">Confirm</button>}
        </th>
      </tr>
    );
};

BookingRow.propTypes = {
    
};

export default BookingRow;