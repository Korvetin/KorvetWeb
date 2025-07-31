import React from 'react';
import './WhyChooseUs.css';

function WhyChooseUs() {
  return (
    <section className="whychooseus-section">
      <div className="why-text">
        <h2>Why Choose <span>KORVET</span>?</h2>
        <p>
          At Korvet Innovations, we blend cutting-edge technology with powerful business strategies to deliver tailored solutions that drive real results.
          Whether you're a startup or a global enterprise, our team is committed to delivering top-tier services with transparency, innovation, and heart.
        </p>
      </div>

      <div className="grid-thoughts">
        <div className="thought-box">
          <h3>💡 Did You Know?</h3>
          <p>You can boost productivity by up to 40% with our optimized automation tools.</p>
        </div>
        <div className="thought-box">
          <h3>❓ A Question to Think</h3>
          <p>What would your business look like if every process ran 2x faster?</p>
        </div>
        <div className="thought-box">
          <h3>🧠 Our Insight</h3>
          <p>Innovation isn't about ideas. It's about solving real problems smartly and creatively.</p>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
