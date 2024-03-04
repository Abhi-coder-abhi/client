import React, { useState } from "react";

const PaymentSetting = () => {
  // Payment settings state
  const [paymentMethods, setPaymentMethods] = useState([
    { id: 1, name: "Credit Card", enabled: true, last4Digits: "1234" },
    { id: 2, name: "PayPal", enabled: false, email: "example@example.com" },
    { id: 3, name: "Venmo", enabled: true, username: "@venmouser" },
    { id: 4, name: "Apple Pay", enabled: false, deviceName: "iPhone 12" },
    { id: 5, name: "Google Pay", enabled: true, accountName: "Google Account" },
  ]);

  return (
    <div className="mt-24 min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">Payment Settings</h1>
      </div>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-8">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg ">
          {paymentMethods.map((method) => (
            <div className="">
              <div key={method.id} className="border-b border-gray-200">
                <div className="px-4 py-4 sm:px-6 mb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-indigo-600 truncate">
                        {method.name}
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        {method.enabled ? "Enabled" : "Disabled"}
                      </p>
                    </div>
                    <div className="ml-2 flex-shrink-0 flex">
                      <label className="inline-flex items-center mt-3">
                        <input
                          type="checkbox"
                          checked={method.enabled}
                          onChange={() => {
                            // Handle enabling/disabling payment method here
                            const updatedMethods = [...paymentMethods];
                            const index = updatedMethods.findIndex(
                              (m) => m.id === method.id
                            );
                            if (index !== -1) {
                              updatedMethods[index].enabled =
                                !updatedMethods[index].enabled;
                              setPaymentMethods(updatedMethods);
                            }
                          }}
                          className="form-checkbox h-5 w-5 text-indigo-600"
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center">
                    {method.name === "Credit Card" && (
                      <p className="text-sm text-gray-500">
                        Last 4 Digits: {method.last4Digits}
                      </p>
                    )}
                    {method.name === "PayPal" && (
                      <p className="text-sm text-gray-500">
                        Email: {method.email}
                      </p>
                    )}
                    {method.name === "Venmo" && (
                      <p className="text-sm text-gray-500">
                        Username: {method.username}
                      </p>
                    )}
                    {method.name === "Apple Pay" && (
                      <p className="text-sm text-gray-500">
                        Device: {method.deviceName}
                      </p>
                    )}
                    {method.name === "Google Pay" && (
                      <p className="text-sm text-gray-500">
                        Account: {method.accountName}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentSetting;
