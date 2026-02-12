import { useState } from "react";
import { UserData, UserModalProps } from "@/interfaces";
import { PostData, PostModalProps }

const UserModal: React.FC<UserModalProps> = ({
  isOpen,
  onClose,
  onAddUser,
}) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    const newUser: UserData = {
      id: Math.floor(Math.random() * 10000),
      name,
      username,
      email,
      phone: "",
      website: "",
      address: {
        street: "",
        suite: "",
        city: "",
        zipcode: "",
        geo: {
          lat: "",
          lng: "",
        },
      },
      company: {
        name: "",
        catchPhrase: "",
        bs: "",
      },
    };

    onAddUser(newUser);
    onClose();
    setName("");
    setUsername("");
    setEmail("");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-[90%] max-w-md shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Add New User
        </h2>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full border p-2 rounded mb-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Username"
          className="w-full border p-2 rounded mb-3"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="flex justify-end gap-3">
          <button
            className="px-4 py-2 bg-gray-300 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded"
            onClick={handleSubmit}
          >
            Add User
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
