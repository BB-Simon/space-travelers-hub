import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets, reserveRocket } from '../../redux/features/rockets/rocketsSlice';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);
  const status = useSelector((state) => state.rockets.status);

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  const handleReserveRocket = (id) => {
    dispatch(reserveRocket(id));
  };

  return (
    <div>
      {status === 'loading' && <div>Loading...</div>}
      {status === 'success' && (
      <>
        <div className="rockets-container">
          {rockets.map((rocket) => (
            <div key={rocket.id} className="rockets">
              {rocket.flickr_images.length > 0 && (
              <img src={rocket.flickr_images[0]} alt={rocket.name} />
              )}
              <div className="rockets-description">
                <h2>{rocket.name}</h2>
                <p className="rocket-para">{rocket.description}</p>
                {rocket.reserved ? (
                  <>
                    <span className="reserved-badge">Reserved</span>
                    <button
                      type="button"
                      className="cancel-reservation-btn"
                      onClick={() => handleReserveRocket(rocket.id)}
                    >
                      Cancel reservation
                    </button>
                  </>
                ) : (
                  <button
                    type="button"
                    className="reserve-rocket-btn"
                    onClick={() => handleReserveRocket(rocket.id)}
                  >
                    Reserve Rocket
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </>
      )}
      {status === 'rejected' && <div>Failed to load rockets data</div>}
    </div>
  );
};

export default Rockets;
