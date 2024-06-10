import React from 'react';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#F9F8EB]">
      <h1 className="text-4xl mb-8">Welcome to Mystical Metanoia</h1>
      <div className="flex flex-row w-full h-full">
        <div className="flex flex-col items-center justify-center w-1/2 bg-white p-8">
          <h2 className="text-3xl mb-4">Reflexology</h2>
          <p className="mb-4 text-center">
            Reflexology is a therapeutic practice that involves applying pressure to specific points on the feet, hands, and ears. These points correspond to different organs and systems in the body. The goal is to promote health and well-being by stimulating the body’s natural healing processes.
          </p>
          <Link href="/reflex">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200">
              Learn More
            </button>
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center w-1/2 bg-gray-100 p-8">
          <h2 className="text-3xl mb-4">Kombo</h2>
          <p className="mb-4 text-center">
            Kombo, also known as Kambo, is a traditional Amazonian medicine derived from the secretion of the Phyllomedusa bicolor frog. It is used by indigenous tribes for its cleansing and healing properties. The practice involves applying the frog secretion to small burns on the skin.
          </p>
          <Link href="/kombo">
            <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-200">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
