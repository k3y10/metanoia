import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F9F8EB] p-4">
      <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4 text-center text-black">Mystical Metanoia</h1>
      <p className="text-lg md:text-xl lg:text-2xl mb-8 text-center text-black">
        Discover the ancient healing practices of Reflexology and Kambo. Learn more about how these methods can promote health and well-being.
      </p>
      <div className="flex flex-col md:flex-row w-full h-full responsive-container">
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 bg-white p-8 mb-4 md:mb-0">
          <Image src="/foot.png" alt="Reflexology Image" width={165} height={165} className="mb-4 rounded-md" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4 text-center">Reflexology</h2>
          <p className="mb-4 text-center text-black">
            <strong>Reflexology</strong> (noun): A therapeutic practice that involves applying pressure to specific points on the feet, hands, and ears. These points correspond to different organs and systems in the body. The goal is to promote health and well-being by stimulating the body’s natural healing processes.
          </p>
          <Link href="/reflex">
            <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-lightpeach focus:outline-none focus:ring-2 focus:ring-blue-200">
              Learn More
            </button>
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 bg-gray-100 p-8">
          <Image src="/kambo.png" alt="Kambo Image" width={175} height={175} className="mb-4 rounded-md" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4 text-center">Kambo</h2>
          <p className="mb-4 text-center text-black">
            <strong>Kambo</strong> (noun): Is a traditional Amazonian medicine derived from the secretion of the Phyllomedusa bicolor frog. It is used by indigenous tribes for its cleansing and healing properties. The practice involves applying the frog secretion to small burns on the skin.
          </p>
          <Link href="/kambo">
            <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-lightpeach focus:outline-none focus:ring-2 focus:ring-green-200">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
