import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div>
      <h1>About My Sister</h1>
      
      <section>
        <h2>Her Story</h2>
        <p>
          My sister has always been a source of inspiration to many. From a young age, she showed a remarkable passion for helping others and an unwavering determination to achieve her dreams. Her journey has been filled with challenges, triumphs, and countless moments that have shaped her into the incredible person she is today.
        </p>
      </section>

      <section>
        <h2>Her Journey</h2>
        <p>
          Over the years, she has embarked on numerous adventures, both personal and professional, that have taken her around the world. From volunteering in remote villages to pursuing higher education, her journey is a testament to her dedication and resilience.
        </p>
      </section>

      <section>
        <h2>Photos</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          <img src="/path/to/photo1.jpg" alt="Description of photo 1" style={{ width: '200px', height: 'auto' }} />
          <img src="/path/to/photo2.jpg" alt="Description of photo 2" style={{ width: '200px', height: 'auto' }} />
          <img src="/path/to/photo3.jpg" alt="Description of photo 3" style={{ width: '200px', height: 'auto' }} />
        </div>
      </section>

      <section>
        <h2>Achievements and Milestones</h2>
        <p>
          Throughout her journey, she has reached numerous milestones, including graduating with honors, receiving awards for her community service, and making a significant impact in her chosen field. Her achievements are a reflection of her hard work and commitment to excellence.
        </p>
      </section>

      <section>
        <h2>Message from Her</h2>
        <p>
          "Thank you for taking the time to learn about my journey. I hope my story inspires you to pursue your passions and overcome any obstacles you may face. Remember, every challenge is an opportunity to grow and every setback is a setup for a comeback."
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
