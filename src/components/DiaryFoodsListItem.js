import React from 'react';
import { Link } from 'react-router-dom';

export const DiaryFoodsListItem = ({ description, totalEnergy, id, serving, totalServingSize }) => {
  const servingUnit = !!serving.servingSize.unit ? serving.servingSize.unit :'g'
  //const totalServingSizeRounded = Math.round(totalServingSize)
  const totalEnergyRounded = Math.round(totalEnergy)
  return(
    <Link className="list-item" to={`/update-food/${id}`}>
      <div>
        <p className="list-item__title">{description} - {totalServingSize}{servingUnit}</p>
      </div>
      <div>
        <p className="list-item__data">{totalEnergyRounded}</p>
      </div>  
    </Link>
  )
}
export default DiaryFoodsListItem;
