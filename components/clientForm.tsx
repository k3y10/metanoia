'use client'

import React, { useState } from 'react';

const ClientForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    birthdate: '',
    email: '',
    referredBy: '',
    firstFootZone: '',
    medications: '',
    recentInjuries: '',
    surgeries: '',
    conditions: {
      pregnant: false,
      diabetic: false,
      cancer: false,
      chemotherapy: false,
      radiation: false,
      metals: false,
      plates: false,
      stents: false,
      pacemaker: false,
      implants: false,
      iud: false,
      highBloodPressure: false,
      lowBloodPressure: false,
      seizures: false,
      spinalFusion: false,
      athletesFoot: false,
      arthritisInFeet: false,
      blisters: false,
      bunions: false,
      calluses: false,
      corns: false,
      edema: false,
      excessiveSweating: false,
      fungus: false,
      hammerToes: false,
      handFootMouthDisease: false,
      healSpur: false,
      ingrownToenails: false,
      neuroma: false,
      neuropathy: false,
      plantarFasciitis: false,
      plantarWarts: false,
      surgeryAndOrMetalPlates: false,
      varicoseVeins: false,
      xerosis: false,
    },
    additionalInfo: '',
    guardianName: '',
    guardianSignature: '',
    date: '',
    guardianDate: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormData({
        ...formData,
        conditions: {
          ...formData.conditions,
          [name]: checked,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-black">
        <label className="block">
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
        </label>
        <label className="block">
          Phone:
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
        </label>
        <label className="block">
          Birthdate:
          <input type="date" name="birthdate" value={formData.birthdate} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
        </label>
        <label className="block">
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
        </label>
        <label className="block">
          Referred By:
          <input type="text" name="referredBy" value={formData.referredBy} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
        </label>
        <label className="block">
          Is this your first Foot Zone:
          <input type="text" name="firstFootZone" value={formData.firstFootZone} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
        </label>
      </div>
      <label className="block">
        Please List any medication you are taking:
        <textarea name="medications" value={formData.medications} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"></textarea>
      </label>
      <label className="block">
        Please list any recent injuries with the past 12 months:
        <textarea name="recentInjuries" value={formData.recentInjuries} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"></textarea>
      </label>
      <label className="block">
        Please list any surgeries:
        <textarea name="surgeries" value={formData.surgeries} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"></textarea>
      </label>
      <fieldset className="block">
        <legend className="text-lg font-medium">Check all boxes which apply to you</legend>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {Object.keys(formData.conditions).map((condition) => (
            <label key={condition} className="flex items-center">
              <input
                type="checkbox"
                name={condition}
                checked={formData.conditions[condition as keyof typeof formData.conditions]}
                onChange={handleChange}
                className="form-checkbox"
              />
              <span className="ml-2">{condition.replace(/([A-Z])/g, ' $1').trim()}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <label className="block">
        Explain any of the conditions listed above, or any other health concerns:
        <textarea name="additionalInfo" value={formData.additionalInfo} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"></textarea>
      </label>
      <p className="text-sm text-gray-600 mt-4">
        By signing this form, I give my consent to receive a foot zone, and understand that all information provided is confidential. It is my responsibility to inform the practitioner if there is any pain or discomfort in the foot zone session. I understand that a foot zone should not be considered as a substitute for medical examinations, diagnosis, or treatment and that I should see a qualified healthcare provider for any medical or mental issue I am aware of. I understand that a foot zone practitioner is not qualified to diagnose, prescribe, or treat for any physical or mental illness, and nothing said during any session should be considered as such. At any time, a practitioner has the right to refuse service for any reason. Because foot zoning can be contraindicated under certain medical conditions, I affirm I have disclosed all known medical conditions, and answered all questions honestly. I agree to keep the practitioner updated on any changes to my medical profile and understand there shall not be liability on the practitioner’s part if I forget to do so.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <label className="block">
          Print Name:
          <input type="text" name="guardianName" value={formData.guardianName} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
        </label>
        <label className="block">
          Signature:
          <input type="text" name="guardianSignature" value={formData.guardianSignature} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
        </label>
        <label className="block">
          Date:
          <input type="date" name="date" value={formData.date} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
        </label>
        <label className="block">
          Consent required for treating minors - Printed Name of Guardian:
          <input type="text" name="guardianName" value={formData.guardianName} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
        </label>
        <label className="block">
          Signature of Guardian:
          <input type="text" name="guardianSignature" value={formData.guardianSignature} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
        </label>
        <label className="block">
          Date:
          <input type="date" name="guardianDate" value={formData.guardianDate} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
        </label>
      </div>
      <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200">
        Submit
      </button>
    </form>
  );
};

export default ClientForm;
