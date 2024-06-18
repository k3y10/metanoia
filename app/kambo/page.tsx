import React from 'react';

const KamboPage: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-4xl md:text-5xl mb-4 text-center">Kambo</h1>
      <section className="mb-8">
        <h2 className="text-2xl md:text-3xl mb-4">What is Kambo?</h2>
        <p className="text-lg md:text-xl">
          Kambo is a traditional Amazonian medicine derived from the secretion of the Phyllomedusa bicolor frog. It is used by indigenous tribes for its cleansing and healing properties. The practice involves applying the frog secretion to small burns on the skin.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl md:text-3xl mb-4">History of Kambo</h2>
        <p className="text-lg md:text-xl">
          Kambo has been used for centuries by indigenous tribes in the Amazon rainforest, particularly in Brazil, Peru, and Colombia. It is traditionally used to cleanse the body, increase physical stamina, and ward off illness. The practice was introduced to the Western world in the late 20th century.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl md:text-3xl mb-4">Benefits of Kambo</h2>
        <ul className="list-disc list-inside text-lg md:text-xl">
          <li>Detoxification</li>
          <li>Boosts immune system</li>
          <li>Enhances physical strength and stamina</li>
          <li>Reduces inflammation</li>
          <li>Improves mental clarity and focus</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl md:text-3xl mb-4">How is Kambo Administered?</h2>
        <p className="text-lg md:text-xl">
          Kambo is administered by creating small burns on the surface of the skin, typically on the upper arm. The frog secretion is then applied to these burns. The body absorbs the secretion, which induces a strong purgative effect, leading to vomiting and sweating. The entire process usually lasts about 30-45 minutes.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl md:text-3xl mb-4">What to Expect During a Kambo Session</h2>
        <p className="text-lg md:text-xl">
          During a Kambo session, a practitioner will create small burns on your skin using a heated stick. The Kambo secretion is applied to these burns. The effects are immediate and intense, often causing nausea, vomiting, and sweating. It is important to be well-hydrated before the session and to follow any instructions given by the practitioner.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl md:text-3xl mb-4">Is Kambo Safe?</h2>
        <p className="text-lg md:text-xl">
          Kambo is generally considered safe when administered by a trained practitioner. However, it is a powerful substance that can cause strong physical reactions. It may not be suitable for individuals with certain health conditions, such as heart problems, low blood pressure, or pregnancy. Always consult with a healthcare provider before undergoing Kambo treatment.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl md:text-3xl mb-4">Finding a Qualified Kambo Practitioner</h2>
        <p className="text-lg md:text-xl">
          It is crucial to find a qualified and experienced Kambo practitioner to ensure a safe and effective session. Look for practitioners who have received formal training and certification in Kambo administration. Personal recommendations and reviews can also help in finding a reputable practitioner.
        </p>
      </section>
    </div>
  );
};

export default KamboPage;
