import React from 'react';
import { useSelector } from 'react-redux';
import css from './MyProfile.module.css';

const MyProfile = () => {
  const { missions } = useSelector((state) => state.missions);
  const { rockets } = useSelector((state) => state.rockets);
  const joinedMission = missions.filter((m) => m.reserved === true);
  const joinedRocket = rockets.filter((r) => r.reserved === true);

  return (
    <div className={css.myprofileContainer}>
      <div>
        <h2>My Missions</h2>
        {joinedMission.length > 0 ? (
          <ul className={css.listWrapper}>
            {joinedMission.map((mission) => (
              <li key={mission.mission_id} className={css.listItem}>
                {mission.mission_name}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      <div>
        <h2>My Rockets</h2>
        {joinedRocket.length > 0 ? (
          <ul className={css.listWrapper}>
            {joinedRocket.map((rocket) => (
              <li key={rocket.id} className={css.listItem}>
                {rocket.rocket_name}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default MyProfile;
