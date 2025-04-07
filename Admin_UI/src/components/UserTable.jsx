import React, { useState } from "react";
// import './UserTable.css';

function UserTable({ users, setUsers, allUsers, setDisplayedUsers }) {
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({});
  const [selectedIds, setSelectedIds] = useState([]);

  const handleEdit = (id, user) => {
    setEditId(id);
    setEditData(user);
  };

  const handleSave = (id) => {
    const updated = allUsers.map((user) =>
      user.id === id ? { ...user, ...editData } : user
    );
    setUsers(updated);
    setDisplayedUsers(updated);
    setEditId(null);
  };

  const handleDelete = (id) => {
    const updated = allUsers.filter((user) => user.id !== id);
    setUsers(updated);
    setDisplayedUsers(updated);
  };

  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const toggleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
    );
  };

  const handleSelectAll = (e) => {
    const newSelection = e.target.checked ? users.map((u) => u.id) : [];
    setSelectedIds(newSelection);
  };

  const deleteSelected = () => {
    const updated = allUsers.filter((user) => !selectedIds.includes(user.id));
    setUsers(updated);
    setDisplayedUsers(updated);
    setSelectedIds([]);
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                onChange={handleSelectAll}
                checked={
                  selectedIds.length === users.length && users.length > 0
                }
              />
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className={selectedIds.includes(user.id) ? "selected" : ""}
            >
              <td>
                <input
                  type="checkbox"
                  checked={selectedIds.includes(user.id)}
                  onChange={() => toggleSelect(user.id)}
                />
              </td>
              {editId === user.id ? (
                <>
                  <td>
                    <input
                      type="text"
                      name="name"
                      value={editData.name}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="email"
                      name="email"
                      value={editData.email}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="role"
                      value={editData.role}
                      onChange={handleChange}
                    />
                  </td>
                  <td className="actions">
                    <button
                      className="save"
                      onClick={() => handleSave(user.id)}
                    >
                      💾
                    </button>
                  </td>
                </>
              ) : (
                <>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td className="actions">
                    <button
                      className="edit"
                      onClick={() => handleEdit(user.id, user)}
                    >
                      ✏️
                    </button>
                    <button
                      className="delete"
                      onClick={() => handleDelete(user.id)}
                    >
                      🗑️
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <button className="delete-selected" onClick={deleteSelected}>
        Delete Selected
      </button>
    </>
  );
}

export default UserTable;
