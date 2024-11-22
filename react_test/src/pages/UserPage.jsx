import React, { useState } from "react";
import UserTable from "./components/UserTable";
import SearchBar from "./components/SearchBar";
import { useRemove } from "./hooks/useRemove";
import useGetAll from "./hooks/useGetAll";

const UserPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { user, setUser, fetchData } = useGetAll();
  const remove = useRemove();

  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
  }

  function handleRemove(id) {
    remove(id);
    setUser((prevUsers) => prevUsers.filter((user) => user.id !== id));
  }

  const filteredUsers = user.filter((user) =>
    user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <SearchBar
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search by first name"
      />

      <button onClick={() => fetchData()}>Load Users</button>
      <UserTable
        users={filteredUsers}
        setUsers={setUser}
        onRemove={handleRemove}
        filteredUsers={filteredUsers}
      />
    </>
  );
};

export default UserPage;
