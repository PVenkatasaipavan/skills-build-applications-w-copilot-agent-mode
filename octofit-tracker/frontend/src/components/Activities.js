import React, { useEffect, useState } from 'react';

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const codespace = process.env.REACT_APP_CODESPACE_NAME || 'localhost';
  const protocol = codespace === 'localhost' ? 'http' : 'https';
  const url = `${protocol}://${codespace}-8000.app.github.dev/api/activities/`;

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setActivities(data.results || data);
      });
  }, [url]);

  return (
    <div className="card mb-4">
      <div className="card-header bg-primary text-white">
        <h2 className="card-title">Activities</h2>
      </div>
      <div className="card-body">
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>User</th>
              <th>Type</th>
              <th>Duration (min)</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity, idx) => (
              <tr key={idx}>
                <td>{activity.user}</td>
                <td>{activity.type}</td>
                <td>{activity.duration}</td>
                <td>{activity.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Activities;
