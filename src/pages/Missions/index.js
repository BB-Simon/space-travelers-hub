import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissionsData } from '../../redux/missions/missionsSlice';
import css from './Missions.module.css';

const Missions = () => {
  const { missions } = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissionsData());
  }, [dispatch]);

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
              <span className={css.notMemberTag}>Not a member</span>
            </td>
            <td className={css.tableData}>
              <button type="button" className={css.joinBtn}>Join Mission</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Missions;
