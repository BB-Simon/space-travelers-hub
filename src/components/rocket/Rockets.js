import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets, reservation, reservationCancel } from '../../redux/features/rockets/rocketsSlice';

const Rockets = () => {
  const dispatch = useDispatch();
  const { rockets } = useSelector((state) => state.rockets);

  useEffect(() => {
    if (rockets.length) return;
    dispatch(fetchRockets());
  }, [dispatch, rockets.length]);

  return (
    <>
      { rockets.map((rocket) => (
        <div className="project.container" key={rocket.id}>
          <div className="container">
            <div className="img-container">
              <img src={rocket.flickr_images} className="card-img" alt="Rocket" />
            </div>
            <div className="col">
              <div className="card-body">
                <h2 className="card-title">{rocket.rocket_name}</h2>
                <p className="card-text">
                  {rocket.reserved && (
                  <span className="button-name">Reserved</span>
                  )}
                  {rocket.description}
                </p>
                {rocket.reserved && (
                <button
                  type="button"
                  className="btn cancel-btn"
                  onClick={() => dispatch(reservationCancel(rocket.id))}
                >
                  Cancel Reservation
                </button>
                )}
                {!rocket.reserved && (
                  <button
                    type="button"
                    className="btn reservation-btn"
                    onClick={() => dispatch(reservation(rocket.id))}
                  >
                    Reserve Rocket
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )) }
    </>
  );
};

export default Rockets;
