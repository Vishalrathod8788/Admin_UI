import { Pagination } from "./components/Pagination";
import { SearchBar } from "./components/SearchBar";
import { UserTable } from "./components/UserTable";
import "./App.css";
import axios from "axios";
import { useState, useEffect, use } from "react";

export const App = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const usersPerPage = 10;

  //get Data from API
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
      );
      console.log(response.data);
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <SearchBar />
      <UserTable />
      <Pagination />
    </div>
  );
};
