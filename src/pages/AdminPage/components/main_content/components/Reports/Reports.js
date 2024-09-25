import React from "react";
import { useSelector } from "react-redux";

const RenderReports = () => {
    const DB_state=useSelector((state)=>state.admin_page)
    return (
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
          {DB_state["data"].map((report, index) => (
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
    );
  };
  export default RenderReports