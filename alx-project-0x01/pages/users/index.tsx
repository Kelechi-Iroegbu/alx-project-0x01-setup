import React, { useState } from "react";
import UserModal from "../../components/common/UserModal";
import { UserData } from "../../interfaces";

const UsersPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users, setUsers] = useState<UserData[]>([]);

  const handleSubmit = (newUser: UserData) => {
    setUsers([...users, newUser]);
  };
posts.map", "<UserCard
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl">Users</h1>

        <button
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          onClick={() => setIsModalOpen(true)}
        >
          Add User
        </button>
      </div>

      <div className="flex flex-col gap-4">
        {users.map((u) => (
          <div key={u.id} className="p-4 border rounded shadow">
            <h2 className="text-xl font-semibold">{u.name}</h2>
            <p>{u.email}</p>
            <p className="text-gray-600">{u.company.name || "No company"}</p>
          </div>
        ))}
      </div>

      <UserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit} // ✔ Matches interface
      />
    </div>
  );
};

export default UsersPage;
