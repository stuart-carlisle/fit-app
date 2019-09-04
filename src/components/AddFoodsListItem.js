import React from 'react';
import { Link } from 'react-router-dom';

export const AddFoodsListItem = ({ description, nutrition, id }) => (


  <Link className="list-item" to={`/add-food/${id}`}>
    <div>
      <p className="list-item__title">{description}</p>
    </div>
    <div>
      <p className="list-item__data">{nutrition.energy.amount}</p>
    </div>  
  </Link>

);

export default AddFoodsListItem;
