import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissionsData } from '../../redux/missions/missionsSlice';

const Missions = () => {
  const { missions } = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissionsData());
  }, [dispatch]);

  return (
    <div>
      <h1>All available missions</h1>
      <ul>
        {missions && missions.map((mission) => (
          <li key={mission.mission_id}>
            <h2>{mission.mission_name}</h2>
            <p>{mission.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Missions;
