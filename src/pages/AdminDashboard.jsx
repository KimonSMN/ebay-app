import React, { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(true);

  async function getUsers() {
    try {
      setLoadingUsers(true);
      const res = await fetch("http://localhost:3000/api/admin/pending-users");
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setUsers(data.users || []);
    } catch (err) {
      console.error(err);
      setUsers([]);
    } finally {
      setLoadingUsers(false);
    }
  }

  async function approveUser(UserID) {
    try {
      const res = await fetch(
        `http://localhost:3000/api/admin/approve/${UserID}`,
        {
          method: "POST",
        }
      );
      if (!res.ok) throw new Error("Failed to approve user");
      await getUsers();
    } catch (err) {
      console.error(err);
    }
  }

  async function declineUser(UserID) {
    try {
      const res = await fetch(
        `http://localhost:3000/api/admin/decline/${UserID}`,
        {
          method: "POST",
        }
      );
      if (!res.ok) throw new Error("Failed to decline user");
      await getUsers();
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Pending User Approvals</h2>

      {loadingUsers ? (
        <div className="text-gray-600">Loading...</div>
      ) : users.length ? (
        <ul className="space-y-4">
          {users.map((user) => (
            <li
              key={user.UserID}
              className="flex items-center justify-between bg-white p-4 rounded-md shadow-md"
            >
              <div>
                <p className="font-semibold">{user.Username}</p>
                <p className="text-sm text-gray-500">{user.Email}</p>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => approveUser(user.UserID)}
                  className="cursor-pointer px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition"
                >
                  Accept
                </button>
                <button
                  onClick={() => declineUser(user.UserID)}
                  className="cursor-pointer px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                >
                  Decline
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-gray-600">No pending users.</div>
      )}
    </div>
  );
};

export default AdminDashboard;
