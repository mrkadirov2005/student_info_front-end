import React from "react";
import { useSelector } from "react-redux";
import { Get_admin_page_groups_data } from "../../../../../../redux/selectors";

const HomePage = () => {
    const DB_state=useSelector(Get_admin_page_groups_data)
    return (
      <div className="home-page">
        <div className="stats-cards">
          <div className="card">
            <h3>Total Teachers</h3>
            <p>{DB_state.teachers}</p>
          </div>
          <div className="card">
            <h3>Students</h3>
            <p>{DB_state.pupils}</p>
          </div>
          <div className="card">
            <h3>Active Groups</h3>
            <p>{DB_state.groups}</p>
          </div>
          <div className="card">
            <h3>Reports</h3>
            <p>{DB_state.reports}</p>
          </div>
        </div>
  
        <div className="recent-activity">
          <h2>Recent Activity</h2>
          <table className="report-table">
        <thead>
          <tr className="table-header-row">
            <th className="table-header">Client</th>
            <th className="table-header">Action</th>
            <th className="table-header">Data</th>
            <th className="table-header">Time</th>
            <th className="table-header">State</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(DB_state.recent_reports).map((report, index) => (
            <tr key={index} className="table-row">
              <td className="table-cell">{report.client}</td>
              <td className="table-cell">{report.type}</td>
              <td className="table-cell">{report.data}</td>
              <td className="table-cell">{report.date}</td>
              <td className="table-cell">{report.trial_status}</td>
            </tr>
          ))}
        </tbody>
      </table>



        </div>
      </div>
    );
  };
  export default HomePage