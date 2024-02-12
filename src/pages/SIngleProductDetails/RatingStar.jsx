import React from 'react';
import { FaStar } from 'react-icons/fa';

const RatingStar = ({ star }) => {
  console.log('star', star);

  const renderStars = () => {
    const starIcons = [];
    for (let i = 0; i < 5; i++) {
      starIcons.push(
        <FaStar
          key={i}
          className={`text-2xl ${i < star ? 'text-green-600' : 'text-gray-400'}`}
        />
      );
    }
    return starIcons;
  };

  return <div className="flex items-center">{renderStars()}</div>;
};

export default RatingStar;