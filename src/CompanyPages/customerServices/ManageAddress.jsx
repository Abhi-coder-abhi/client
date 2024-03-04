import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ManageAddress = () => {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: "John Doe",
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zip: "10001",
    },
    {
      id: 2,
      name: "Jane Smith",
      street: "456 Elm St",
      city: "Los Angeles",
      state: "CA",
      zip: "90001",
    },
    {
      id: 3,
      name: "Alice Johnson",
      street: "789 Oak Ave",
      city: "Chicago",
      state: "IL",
      zip: "60601",
    },
    {
      id: 4,
      name: "Bob Brown",
      street: "101 Pine Rd",
      city: "Houston",
      state: "TX",
      zip: "77001",
    },
    {
      id: 5,
      name: "Mary Wilson",
      street: "222 Cedar Ln",
      city: "Miami",
      state: "FL",
      zip: "33101",
    },
    {
      id: 6,
      name: "David Lee",
      street: "555 Elm St",
      city: "San Francisco",
      state: "CA",
      zip: "94101",
    },
    {
      id: 7,
      name: "Sarah Adams",
      street: "777 Oak Ave",
      city: "Seattle",
      state: "WA",
      zip: "98101",
    },
    {
      id: 8,
      name: "Michael Clark",
      street: "444 Maple Rd",
      city: "Boston",
      state: "MA",
      zip: "02101",
    },
    {
      id: 9,
      name: "Emily White",
      street: "888 Birch Dr",
      city: "Atlanta",
      state: "GA",
      zip: "30301",
    },
    {
      id: 10,
      name: "Robert Turner",
      street: "999 Cedar Ln",
      city: "Denver",
      state: "CO",
      zip: "80201",
    },
    {
      id: 11,
      name: "Olivia Smith",
      street: "111 Oak Ave",
      city: "Phoenix",
      state: "AZ",
      zip: "85001",
    },
    {
      id: 12,
      name: "William Brown",
      street: "222 Elm St",
      city: "Philadelphia",
      state: "PA",
      zip: "19101",
    },
    {
      id: 13,
      name: "Emma Johnson",
      street: "333 Main St",
      city: "Dallas",
      state: "TX",
      zip: "75201",
    },
    {
      id: 14,
      name: "James Davis",
      street: "444 Pine Rd",
      city: "San Diego",
      state: "CA",
      zip: "92101",
    },
    {
      id: 15,
      name: "Sophia Wilson",
      street: "555 Oak Ave",
      city: "Portland",
      state: "OR",
      zip: "97201",
    },
    {
      id: 16,
      name: "Benjamin Clark",
      street: "666 Maple Rd",
      city: "Las Vegas",
      state: "NV",
      zip: "89101",
    },
    {
      id: 17,
      name: "Ava Turner",
      street: "777 Elm St",
      city: "Minneapolis",
      state: "MN",
      zip: "55401",
    },
    {
      id: 18,
      name: "Liam Adams",
      street: "888 Oak Ave",
      city: "Orlando",
      state: "FL",
      zip: "32801",
    },
    {
      id: 19,
      name: "Charlotte White",
      street: "999 Pine Rd",
      city: "Raleigh",
      state: "NC",
      zip: "27601",
    },
    {
      id: 20,
      name: "Ethan Smith",
      street: "123 Birch Dr",
      city: "Nashville",
      state: "TN",
      zip: "37201",
    },
  ]);

  const navigate = useNavigate();

  const states = useSelector((states) => states.user);
  useEffect(() => {
    if (!states?.isAuthenticated) {
      navigate("/auth/consumerLogin");
    }
  }, [states]);
  return (
    <div className="mt-0 md:mt-16  min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">Address Management</h1>
      </div>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-8">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Street
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  City
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  State
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Zip
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {addresses.map((address) => (
                <tr key={address.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {address.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {address.street}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {address.city}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {address.state}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{address.zip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageAddress;
