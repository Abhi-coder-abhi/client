import React from "react";
import { useSelector } from "react-redux";

function AccountSettings() {
  const state = useSelector((state) => state.user);
  console.log(state);
  return (
    <>
      <div className="mt-24 bg-gray-100 min-h-screen py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6 grid grid-cols-2 gap-6">
            <div className="col-span-1">
              <h2 className="text-xl font-semibold mb-4">
                Personal Information
              </h2>
              <div className="mb-4">
                <label className="font-semibold">Name:</label>
                <p className="ml-2 text-black">{state?.userData?.fullName}</p>
              </div>
              <div className="mb-4">
                <label className="font-semibold text-black">Email:</label>
                <p className="ml-2 text-black">{state?.userData?.email}</p>
              </div>
              <div className="mb-4">
                <label className="font-semibold text-black">Address:</label>
                <p className="ml-2 text-black">
                  Flat No. T-1, 104, 1st Floor, Tower-1, GH 01/A, Sector 16C,
                  Exotica Dreamville, Greater Noida, U.P. 201203
                </p>
              </div>
            </div>

            <div className="col-span-1">
              <h2 className="text-xl font-semibold mb-4">
                Company Information
              </h2>
              <div className="mb-4">
                <label className="font-semibold text-black">Company:</label>
                <p className="ml-2 text-black">Simsun</p>
              </div>
              <div className="mb-4">
                <label className="font-semibold text-black">
                  Company Email:
                </label>
                <p className="ml-2 text-black">simsunelectricwork@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountSettings;
