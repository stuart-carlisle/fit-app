import React from 'react';
import { Link } from 'react-router-dom';

export const AddExercisesListItem = ({ description, energy, id }) => (


  <Link className="list-item" to={`/add-exercise-confirmation/${id}`}>
    <div>
      <p className="list-item__title">{description}</p>
    </div>
    <div>
      <p className="list-item__data">{energy}</p>
    </div>  
  </Link>

);

export default AddExercisesListItem;
