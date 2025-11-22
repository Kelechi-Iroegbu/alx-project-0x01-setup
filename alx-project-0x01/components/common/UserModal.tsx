import React, { useState } from "react";
import { UserData, UserModalProps } from "../../interfaces";

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState<UserData>({
    id: Date.now(),
    name: "",
    username: "",
    email: "",
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
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  const update = (field: keyof UserData, value: any) => {
    setFormData({ ...formData, [field]: value });
  };

  const submit = () => {
    onSubmit(formData); // ✔ Correct
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-[450px] rounded p-6 shadow-lg">
        <h2 className="text-2xl mb-4">Add New User</h2>

        <div className="flex flex-col gap-3">
          <input
            className="border p-2 rounded"
            placeholder="Name"
            onChange={(e) => update("name", e.target.value)}
          />
          <input
            className="border p-2 rounded"
            placeholder="Username"
            onChange={(e) => update("username", e.target.value)}
          />
          <input
            className="border p-2 rounded"
            placeholder="Email"
            onChange={(e) => update("email", e.target.value)}
          />
          <input
            className="border p-2 rounded"
            placeholder="Phone"
            onChange={(e) => update("phone", e.target.value)}
          />
          <input
            className="border p-2 rounded"
            placeholder="Website"
            onChange={(e) => update("website", e.target.value)}
          />

          <h3 className="font-semibold mt-3">Address</h3>

          <input
            className="border p-2 rounded"
            placeholder="Street"
            onChange={(e) =>
              setFormData({
                ...formData,
                address: { ...formData.address, street: e.target.value },
              })
            }
          />

          <input
            className="border p-2 rounded"
            placeholder="Suite"
            onChange={(e) =>
              setFormData({
                ...formData,
                address: { ...formData.address, suite: e.target.value },
              })
            }
          />
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
            onClick={submit}
          >
            Save User
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
