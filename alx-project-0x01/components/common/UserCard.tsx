import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  phone,
  website,
  address,
  company,
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
      <h2 className="text-xl font-bold text-gray-800">{name}</h2>
      <p className="text-sm text-gray-500">@{username}</p>

      <div className="mt-4 space-y-2 text-gray-700 text-sm">
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Website:</strong> {website}</p>
      </div>

      <div className="mt-4 text-sm text-gray-600">
        <p className="font-semibold">Address</p>
        <p>{address.street}, {address.suite}</p>
        <p>{address.city} - {address.zipcode}</p>
      </div>

      <div className="mt-4 text-sm text-gray-600 border-t pt-2">
        <p className="font-semibold">Company</p>
        <p>{company.name}</p>
        <p className="italic text-xs">{company.catchPhrase}</p>
      </div>
    </div>
  );
};

export default UserCard;
