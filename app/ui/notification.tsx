'use client';

import React from 'react';
import { useNotification } from './notification-context';

export default function Notification() {
  const { message, setMessage } = useNotification();

  if (!message) return null;

  return (
    <div className="notification fixed bottom-0 left-1/2 transform -translate-x-1/2 m-4 p-4 bg-gray-800 text-white rounded-lg shadow-lg">
      {message}
      <button
        className="ml-2"
        onClick={() => {
          setMessage(null);
        }}
      >
        Close
      </button>
    </div>
  );
}
