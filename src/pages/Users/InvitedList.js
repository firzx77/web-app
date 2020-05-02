import React from "react";
import UserList from "../../components/UserList";

// Dummy Users Invited Data
import users from "../../__data/invited.json";

const UsersPage = () => {
  return <UserList users={users} />;
};

export default UsersPage;
