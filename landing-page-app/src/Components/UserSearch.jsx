 import React, { useEffect, useState } from "react";
import "./Styles/UserSearch.css";
const Debouncing = ({ onSearch, users, isLoading }) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    onSearch(searchTerm);
  }, [searchTerm, onSearch]);
  return (
    <div className="user-search" id="users">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      {isLoading ? (
        <div className="loading">Loading users...</div>
      ) : (
        <div className="users-grid">
          {users.length > 0 ? (
            users.map((user) => (
              <div className="user-card" key={user.id}>
                <div className="user-avatar">{user.name.charAt(0)}</div>
                <h4>Name : {user.name}</h4>
                <p>Email : {user.email}</p>
                <p className="user-company">
                  Company Name : {user.company.name}
                </p>
              </div>
            ))
          ) : (
            <div className="no-results">No users found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Debouncing;
