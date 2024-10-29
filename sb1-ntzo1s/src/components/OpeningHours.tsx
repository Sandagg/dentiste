import React from 'react';
import { Clock } from 'lucide-react';

const OpeningHours = () => {
  const hours = [
    { day: 'Monday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Tuesday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Wednesday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Thursday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Friday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 2:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ];

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
      <div className="flex items-center justify-center mb-8">
        <Clock className="w-12 h-12 text-blue-600" />
      </div>
      <div className="space-y-4">
        {hours.map((schedule) => (
          <div
            key={schedule.day}
            className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0"
          >
            <span className="font-medium text-gray-900">{schedule.day}</span>
            <span className="text-gray-600">{schedule.hours}</span>
          </div>
        ))}
      </div>
      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <p className="text-blue-800 text-center">
          Emergency appointments available 24/7. Call (555) 123-4567
        </p>
      </div>
    </div>
  );
};

export default OpeningHours;