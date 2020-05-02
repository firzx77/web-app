import React from "react";
import UserList from "../../components/UserList";

// Dummy Users Data
import users from "../../__data/users.json";

const UsersPage = () => {
  return <UserList users={users} />;
};

export default UsersPage;
