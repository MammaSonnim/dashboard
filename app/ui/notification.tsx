'use client';

import React from 'react';
import { useNotification } from './notification-context';

export default function Notification() {
  const { message, setMessage } = useNotification();

  if (!message) return null;

  return (
    <div className="notification fixed bottom-0 left-1/2 m-4 -translate-x-1/2 transform rounded-lg bg-gray-800 p-4 text-white shadow-lg">
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
