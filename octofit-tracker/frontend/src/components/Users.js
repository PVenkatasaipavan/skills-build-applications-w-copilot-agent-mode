import React, { useEffect, useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);
  const codespace = process.env.REACT_APP_CODESPACE_NAME || 'localhost';
  const protocol = codespace === 'localhost' ? 'http' : 'https';
  const url = `${protocol}://${codespace}-8000.app.github.dev/api/users/`;

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setUsers(data.results || data);
      });
  }, [url]);

  return (
    <div className="card mb-4">
      <div className="card-header bg-warning text-dark">
        <h2 className="card-title">Users</h2>
      </div>
      <div className="card-body">
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Team</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={idx}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.team}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
