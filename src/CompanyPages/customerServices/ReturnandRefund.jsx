import React from "react";

const ReturnandRefund = () => {
  return (
    <>
      <div className="mt-0 md:mt-16  container mx-auto p-4">
        <h1 className="text-3xl font-semibold  mb-4">Returns and Refunds</h1>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className=" font-semibold text-2xl mb-2">Return Policy</h2>
          <p className="mb-4 text-black text-2xl">
            <div>
              Our return policy allows you to return items within 30 days of
              purchase. If 30 days have gone by since your purchase,
              unfortunately, we can't offer you a refund or exchange.
            </div>
            <div>
              To be eligible for a return, your item must be unused and in the
              same condition that you received it. It must also be in the
              original packaging.
            </div>
          </p>

          <h2 className=" font-semibold text-2xl mb-2">Refund Process</h2>
          <p className="mb-4 text-black text-2xl">
            <div>
              To request a refund, please contact our customer support team with
              your order details. Once your request is approved, we will process
              your refund within 5-7 business days.
            </div>
            <div>
              Several types of goods are exempt from being returned. Perishable
              goods such as food, flowers, newspapers, or magazines cannot be
              returned.
            </div>
          </p>

          <h2 className=" font-semibold text-2xl mb-2">Contact Us</h2>
          <p className="text-black text-2xl">
            If you have any questions about our returns and refunds policy,
            please don't hesitate to contact our customer support team at{" "}
            <a href="mailto:simsunelectricwork@gmail.com">
              simsunelectricwork@gmail.com .
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default ReturnandRefund;
