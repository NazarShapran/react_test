import React, { useState, useEffect } from "react";
import RemoveUser from "./RemoveUser";

const UserTable = ({ users, onRemove, filteredUsers }) => {
  const showUsers = filteredUsers.length > 0 ? filteredUsers : users;
  if (users.length === 0) return <p>No users found</p>;
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Ege</th>
        </tr>
      </thead>
      <tbody>
        {showUsers.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.age}</td>
            <td>
              <RemoveUser onSubmit={() => onRemove(user.id)} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
