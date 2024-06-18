'use client'

import React, { useState, useEffect } from 'react';
import { auth, createAccountWithEmailPassword, updateProfile } from '@/utilities/firebaseClient';

const AccountProfile: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        setEmail(user.email || '');
        setUsername(user.displayName || '');
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignUp = async () => {
    try {
      setLoading(true);
      setError('');
      const userCredential = await createAccountWithEmailPassword(email, password);
      const user = userCredential.user;
      await updateProfile(user, {
        displayName: username,
      });
      setUser(user);
    } catch (error) {
      console.error('Error creating account:', error);
      setError('Error creating account. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateProfile = async () => {
    try {
      setLoading(true);
      setError('');
      if (user) {
        await updateProfile(user, {
          displayName: username,
        });
        // Assuming bio and other profile details are stored in Firestore or Realtime Database
        // Update the additional user details in your database here
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      setError('Error updating profile. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-2xl mb-4">{user ? 'Update Profile' : 'Create Account'}</h2>
      <form className="flex flex-col gap-4 w-full max-w-md" onSubmit={(e) => e.preventDefault()}>
        <label className="block">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            disabled={user !== null}
          />
        </label>
        <label className="block">
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </label>
        {user ? (
          <button
            onClick={handleUpdateProfile}
            disabled={loading}
            className="mt-4 px-4 py-2 bg-black text-white rounded-md hover:bg-lightpeach focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            {loading ? 'Updating...' : 'Update Profile'}
          </button>
        ) : (
          <button
            onClick={handleSignUp}
            disabled={loading}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
        )}
      </form>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default AccountProfile;
