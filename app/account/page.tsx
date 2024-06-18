import React from 'react';
import AccountProfile from '@/components/accountProfile';
import ClientForm from '@/components/clientForm';

const AccountPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-8 bg-[#F9F8EB]">
      <h1 className="text-4xl mb-8 text-black">Manage Your Account</h1>
      <div className="w-3/4 bg-white p-8 rounded-lg shadow-lg mb-8">
        <AccountProfile />
      </div>
      <div className="w-3/4 bg-white p-8 rounded-lg shadow-lg text-black">
        <ClientForm />
      </div>
    </div>
  );
};

export default AccountPage;
