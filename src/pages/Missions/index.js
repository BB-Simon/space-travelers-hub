import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissionsData, joinMission, leaveMission } from '../../redux/missions/missionsSlice';
import css from './Missions.module.css';

const Missions = () => {
  const { missions, missionsLoading } = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(fetchMissionsData());
    }
  }, [dispatch, missions.length]);

  const handleJoinMission = (id) => {
    dispatch(joinMission(id));
  };

  const handleLeaveMission = (id) => {
    dispatch(leaveMission(id));
  };

  if (missionsLoading) {
    return <p>Missions data loading...!</p>;
  }

  return (
    <div className={css.tableWrapper}>
      <table className={css.table}>
        <tr>
          <th className={css.tableHead}>Mission</th>
          <th className={css.tableHead}>Description</th>
          <th className={css.tableHead}>Status</th>
          <th className={css.tableHead}> </th>
        </tr>

        {missions && missions.map((mission) => (
          <tr key={mission.mission_id} className={css.tableRow}>
            <td className={css.tableData}>
              <h3 className={css.title}>{mission.mission_name}</h3>
            </td>
            <td className={css.tableData}>
              <p className={css.description}>{mission.description}</p>
            </td>
            <td className={css.tableData}>
              {mission.reserved && mission.reserved ? (
                <span className={css.memberBadge}>Active Member</span>
              ) : (
                <span className={css.notMemberBadge}>Not a member</span>
              )}
            </td>
            <td className={css.tableData}>
              {mission.reserved && mission.reserved ? (
                <button
                  type="button"
                  className={css.leaveBtn}
                  onClick={() => handleLeaveMission(mission.mission_id)}
                >
                  Leave Mission
                </button>
              ) : (
                <button
                  type="button"
                  className={css.joinBtn}
                  onClick={() => handleJoinMission(mission.mission_id)}
                >
                  Join Mission
                </button>
              )}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Missions;
