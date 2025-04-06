import React, { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import UserTable from "./components/UserTable";
import Pagination from "./components/Pagination";

const USERS_API =
  "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";

function App() {
  const [users, setUsers] = useState([]);
  const [displayedUsers, setDisplayedUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const USERS_PER_PAGE = 10;

  useEffect(() => {
    fetch(USERS_API)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setDisplayedUsers(data);
      });
  }, []);

  useEffect(() => {
    const filtered = users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.role.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setDisplayedUsers(filtered);
    setCurrentPage(1); // reset page on search
  }, [searchTerm, users]);

  const startIdx = (currentPage - 1) * USERS_PER_PAGE;
  const currentUsers = displayedUsers.slice(
    startIdx,
    startIdx + USERS_PER_PAGE
  );
  const totalPages = Math.ceil(displayedUsers.length / USERS_PER_PAGE);

  return (
    <div className="app-container">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <UserTable
        users={currentUsers}
        setUsers={setUsers}
        allUsers={users}
        setDisplayedUsers={setDisplayedUsers}
      />
      <div className="footer">
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default App;
