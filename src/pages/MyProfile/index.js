import React from 'react';
import { useSelector } from 'react-redux';
import css from './MyProfile.module.css';

const MyProfile = () => {
  const { missions } = useSelector((state) => state.missions);
  const joinedMission = missions.filter((m) => m.reserved === true);

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
        <ul>
          <li>Rockets</li>
        </ul>
      </div>
    </div>
  );
};

export default MyProfile;
