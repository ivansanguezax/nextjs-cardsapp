"use client";

import Link from "next/link";

function Users({ users }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {users.map((user) => (
        <Link href={`/users/${user.id}`} key={user.id}>
          <div className="bg-gray-800 text-white p-4 shadow-md rounded-md transform hover:scale-105 transition duration-300 ease-in-out">
            <img
              src={user.avatar}
              alt={user.first_name}
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h5 className="text-lg font-bold mb-2">
              {user.id} {user.first_name} {user.last_name}
            </h5>
            <p className="text-gray-300">{user.email}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Users;
