'use client'

import { useState } from 'react';
import { auth, createAccountWithEmailPassword, signInWithGoogle, signInWithEmailPassword, setPersistence, browserLocalPersistence } from '@/utilities/firebaseClient';
import Image from 'next/image';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSignUp = async () => {
    try {
      setLoading(true);
      setError('');
      const userCredential = await createAccountWithEmailPassword(email, password);
      const user = userCredential.user;

      // Set persistence for the user
      await setPersistence(auth, browserLocalPersistence);

      // Automatically sign in after sign-up
      await handleSignIn();
    } catch (error) {
      console.error('Error creating account:', error);
      setError('Error creating account. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSignIn = async () => {
    try {
      setLoading(true);
      setError('');
      const userCredential = await signInWithEmailPassword(email, password);
      const user = userCredential.user;

      // Set persistence for the user
      await setPersistence(auth, browserLocalPersistence);

      // Redirect to home page upon successful sign-in
      window.location.href = '/home';
    } catch (error) {
      console.error('Error signing in:', error);
      setError('Error signing in. Please check your credentials and try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async (event: React.MouseEvent<HTMLButtonElement>) => {
    try {
      const result = await signInWithGoogle();
  
      const user = result.user;
      if (user) {
        window.location.href = '/home';
      }
    } catch (error: any) {
      console.error("Error signing in with Google", error.message);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <Image src='/mainlogo.png' alt="Company Logo" width={200} height={200} />
      <br></br>
      <h1 className="text-3xl mb-4">Mystical Metanoia</h1>
      <br></br>
      <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 text-black"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 text-black"
        />
        <button
          onClick={handleSignUp}
          disabled={loading}
          className="px-4 py-2 bg-black border-2 border-white text-white rounded-md hover:bg-lightlaven focus:outline-none focus:ring focus:ring-blue-200"
        >
          {loading ? 'Signing Up...' : 'Sign Up'}
        </button>
        <button
          onClick={handleSignIn}
          disabled={loading}
          className="px-4 py-2 bg-black border-2 border-white text-white rounded-md hover:bg-lightlaven focus:outline-none focus:ring focus:ring-blue-200"
        >
          {loading ? 'Signing In...' : 'Sign In'}
        </button>
      </form>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <div className="flex items-center space-x-4 mt-4">
        <button 
          onClick={(evt) => { 
            evt.preventDefault(); // prevent the page from reloading
            handleGoogleSignIn(evt);
          }}
          className="flex items-center px-4 py-2 bg-black border-2 border-white text-white rounded-md hover:bg-lightlaven focus:outline-none focus:ring focus:ring-blue-200"
        >
          <Image 
            src='/google_logo.png' 
            alt='Google logo'
            width={25} 
            height={25} 
          />
          <span className="ml-2">Use Google Account</span>
        </button>
      </div>
    </main>
  );
}
