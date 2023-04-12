import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../../redux/features/rockets/rocketsSlice';

const Rockets = () => {
  const { rockets } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <div>
      <h1>All available rockets</h1>
      <ul>
        {rockets && rockets.map((rocket) => (
          <li key={rocket.id}>
            <h2>{rocket.rocket_name}</h2>
            <p>{rocket.description}</p>
            <img alt="rocketImg" src={rocket.flickr_images} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rockets;
