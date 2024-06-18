import React from 'react';
import CalendarScheduler from '@/components/scheduleCalendar';

const SchedulingPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#F9F8EB]">
      <h1 className="text-4xl mb-8 text-black">Schedule Your Appointment</h1>
      <div className="w-3/4 bg-white p-8 rounded-lg shadow-lg">
        <CalendarScheduler />
      </div>
    </div>
  );
};

export default SchedulingPage;
