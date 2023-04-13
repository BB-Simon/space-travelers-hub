import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets, reservation, reservationCancel } from '../../redux/features/rockets/rocketsSlice';
import css from './Rocket.module.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const { rockets, isLoading } = useSelector((state) => state.rockets);

  useEffect(() => {
    if (rockets.length) return;
    dispatch(fetchRockets());
  }, [dispatch, rockets.length]);

  if (isLoading) {
    return <p>Rockets data loading...!</p>;
  }

  return (
    <>
      { rockets.map((rocket) => (
        <div className={css.projectContainer} key={rocket.id}>
          <div className={css.container}>
            <div className={css.imgContainer}>
              <img src={rocket.flickr_images} className={css.cardImg} alt="Rocket" />
            </div>
            <div className="col">
              <div className={css.textContainer}>
                <h2 className={css.cardTitle}>{rocket.rocket_name}</h2>
                <p className={css.cardText}>
                  {rocket.reserved && (
                  <span className={css.buttonName}>Reserved</span>
                  )}
                  {rocket.description}
                </p>
                {rocket.reserved && (
                <button
                  type="button"
                  className={css.cancelBtn}
                  onClick={() => dispatch(reservationCancel(rocket.id))}
                >
                  Cancel Reservation
                </button>
                )}
                {!rocket.reserved && (
                  <button
                    type="button"
                    className={css.reserveBtn}
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
