import React from 'react';

const OrderCard = ({ orderId, date, status, total }) => {
  return (
    <div className="bg-gray-50 rounded-xl p-6">
      <div className="flex flex-wrap justify-between items-start mb-4">
        <div>
          <h3 className="font-medium">{orderId}</h3>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm ${
          status === 'Delivered' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
        }`}>
          {status}
        </span>
      </div>
      <div className="border-t pt-4">
        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span>${total}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;