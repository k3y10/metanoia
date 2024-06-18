'use client'

import React, { useState } from 'react';
import Calendar, { CalendarProps } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { format } from 'date-fns';

type AppointmentType = 'Reflexology' | 'Kombo' | 'Both';

type Appointments = {
  [key: string]: { type: AppointmentType; details: string }[];
};

const CalendarScheduler: React.FC = () => {
  const [date, setDate] = useState<Date | null>(new Date());
  const [appointmentType, setAppointmentType] = useState<AppointmentType>('Reflexology');
  const [appointments, setAppointments] = useState<Appointments>({});

  const handleDateChange: CalendarProps['onChange'] = (value) => {
    if (Array.isArray(value)) {
      setDate(value[0]);
    } else {
      setDate(value);
    }
  };

  const handleSchedule = () => {
    if (!date) return; // Prevent scheduling on null date
    const dateString = format(date, 'yyyy-MM-dd');
    const appointmentDetails = prompt('Enter appointment details:');
    if (appointmentDetails) {
      setAppointments((prev) => ({
        ...prev,
        [dateString]: [
          ...(prev[dateString] || []),
          { type: appointmentType, details: appointmentDetails },
        ],
      }));
    }
  };

  const getAppointmentColor = (type: AppointmentType) => {
    switch (type) {
      case 'Reflexology':
        return 'bg-blue-200';
      case 'Kombo':
        return 'bg-green-200';
      case 'Both':
        return 'bg-purple-200';
      default:
        return '';
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-2xl mb-4">Calendar and Scheduling</h2>
      <Calendar onChange={handleDateChange} value={date} className="mb-4" />
      <div className="mb-4">
        <label htmlFor="appointmentType" className="mr-2">Select Appointment Type:</label>
        <select
          id="appointmentType"
          value={appointmentType}
          onChange={(e) => setAppointmentType(e.target.value as AppointmentType)}
          className="px-2 py-1 border rounded-md"
        >
          <option value="Reflexology">Reflexology</option>
          <option value="Kombo">Kombo</option>
          <option value="Both">Both</option>
        </select>
      </div>
      <button
        onClick={handleSchedule}
        disabled={!date}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200 mb-4"
      >
        Schedule Appointment
      </button>
      <div className="w-full">
        <h2 className="text-xl mb-4">Appointments</h2>
        {Object.keys(appointments).map((date) => (
          <div key={date} className="mb-4">
            <h3 className="text-lg font-semibold">{date}</h3>
            <ul className="list-disc list-inside">
              {appointments[date].map((appointment, index) => (
                <li key={index} className={`p-2 rounded-md ${getAppointmentColor(appointment.type)}`}>
                  <strong>{appointment.type}</strong>: {appointment.details}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarScheduler;
