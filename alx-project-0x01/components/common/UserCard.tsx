import { UserProps } from "@/interface";

const UserCard: React.FC<UserProps> = ({
  id,
  name,
  username,
  email,
  phone,
  address,
  website,
  company
}) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="mb-4">
            <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
            <p className="text-gray-600">@{username}</p>
        </div>
        <p className="text-gray-600">Email: {email}</p>
        <p className="text-gray-600">Phone: {phone}</p>
        <p className="text-gray-600">Website: {website}</p>
        <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-800">Address:</h3>
            <p className="text-gray-600">
            {address.suite}, {address.street}, {address.city} - {address.zipcode}
            </p>
        </div>
        <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-800">Geo:</h3>
            <p className="text-gray-600">
            Latitude: {address.geo.lat}, Longitude: {address.geo.lng}
            </p>
        </div>
         <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-800">Company:</h3>
            <p className="text-gray-600">
            name: {company.bs}, catchPhrase: {company.catchPhrase}, bs: {company.name}
            </p>
        </div>
    </div>
  );
};

export default UserCard;
