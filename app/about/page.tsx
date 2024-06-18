import React from 'react';
import Image from 'next/image';

const AboutPage: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-4xl md:text-5xl mb-12 text-center">About Aspen McCune</h1>
      
      <section className="mb-16 flex flex-col md:flex-row items-center md:items-start">
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-3xl mb-4">Her Story</h2>
          <p className="text-lg md:text-xl">
            Aspen McCune has always been a source of inspiration to many. From a young age, she showed a remarkable passion for helping others and an unwavering determination to achieve her dreams. Her journey has been filled with challenges, triumphs, and countless moments that have shaped her into the incredible person she is today.
          </p>
        </div>
        <div className="relative w-full md:w-1/2 h-64 md:h-auto">
          <Image src="/photos/photo1.jpg" alt="Aspen's Story" layout="fill" objectFit="cover" className="rounded-md" />
        </div>
      </section>

      <section className="mb-16 flex flex-col md:flex-row-reverse items-center md:items-start">
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-3xl mb-4">Her Journey</h2>
          <p className="text-lg md:text-xl">
            Over the years, Aspen has embarked on numerous adventures, both personal and professional, that have taken her around the world. From volunteering in remote villages to pursuing higher education, her journey is a testament to her dedication and resilience.
          </p>
        </div>
        <div className="relative w-full md:w-1/2 h-64 md:h-auto">
          <Image src="/photos/photo2.jpg" alt="Aspen's Journey" layout="fill" objectFit="cover" className="rounded-md" />
        </div>
      </section>

      <section className="mb-16 flex flex-col md:flex-row items-center md:items-start">
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-3xl mb-4">Achievements and Milestones</h2>
          <p className="text-lg md:text-xl">
            Throughout her journey, Aspen has reached numerous milestones, including graduating with honors, receiving awards for her community service, and making a significant impact in her chosen field. Her achievements are a reflection of her hard work and commitment to excellence.
          </p>
        </div>
        <div className="relative w-full md:w-1/2 h-64 md:h-auto">
          <Image src="/photos/photo3.jpg" alt="Aspen's Achievements" layout="fill" objectFit="cover" className="rounded-md" />
        </div>
      </section>

      <section className="mb-16 flex flex-col md:flex-row-reverse items-center md:items-start">
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-3xl mb-4">Message from Her</h2>
          <p className="text-lg md:text-xl">
            "Thank you for taking the time to learn about my journey. I hope my story inspires you to pursue your passions and overcome any obstacles you may face. Remember, every challenge is an opportunity to grow and every setback is a setup for a comeback."
          </p>
        </div>
        <div className="relative w-full md:w-1/2 h-64 md:h-auto">
          <Image src="/photos/photo4.jpg" alt="Aspen's Message" layout="fill" objectFit="cover" className="rounded-md" />
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
