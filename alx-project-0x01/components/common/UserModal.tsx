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

  const updateField = (field: string, value: any) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    onSubmit(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-[500px] p-6 rounded shadow-lg">
        <h2 className="text-2xl mb-4">Add New User</h2>

        <div className="flex flex-col gap-3">

          <input
            type="text"
            placeholder="Name"
            className="border p-2 rounded"
            onChange={(e) => updateField("name", e.target.value)}
          />

          <input
            type="text"
            placeholder="Username"
            className="border p-2 rounded"
            onChange={(e) => updateField("username", e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded"
            onChange={(e) => updateField("email", e.target.value)}
          />

          <input
            type="text"
            placeholder="Phone"
            className="border p-2 rounded"
            onChange={(e) => updateField("phone", e.target.value)}
          />

          <input
            type="text"
            placeholder="Website"
            className="border p-2 rounded"
            onChange={(e) => updateField("website", e.target.value)}
          />

          {/* Address */}
          <h3 className="font-semibold mt-3">Address</h3>

          <input
            type="text"
            placeholder="Street"
            className="border p-2 rounded"
            onChange={(e) =>
              setFormData({
                ...formData,
                address: { ...formData.address, street: e.target.value },
              })
            }
          />

          <input
            type="text"
            placeholder="Suite"
            className="border p-2 rounded"
            onChange={(e) =>
              setFormData({
                ...formData,
                address: { ...formData.address, suite: e.target.value },
              })
            }
          />

          <input
            type="text"
            placeholder="City"
            className="border p-2 rounded"
            onChange={(e) =>
              setFormData({
                ...formData,
                address: { ...formData.address, city: e.target.value },
              })
            }
          />

          <input
            type="text"
            placeholder="Zipcode"
            className="border p-2 rounded"
            onChange={(e) =>
              setFormData({
                ...formData,
                address: { ...formData.address, zipcode: e.target.value },
              })
            }
          />

          {/* Company */}
          <h3 className="font-semibold mt-3">Company</h3>

          <input
            type="text"
            placeholder="Company Name"
            className="border p-2 rounded"
            onChange={(e) =>
              setFormData({
                ...formData,
                company: { ...formData.company, name: e.target.value },
              })
            }
          />
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Save User
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
