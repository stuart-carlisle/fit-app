import React from 'react';
import { Link } from 'react-router-dom';

export const DiaryExercisesListItem = ({ description, energy, id, time }) => {

  return(
    <Link className="list-item" to={`/update-exercise/${id}`}>
      <div>
        <p className="list-item__title">{description} - {`${time} minutes`}</p>
      </div>
      <div>
        <p className="list-item__data">{energy}</p>
      </div>  
    </Link>
  )
}
export default DiaryExercisesListItem;
