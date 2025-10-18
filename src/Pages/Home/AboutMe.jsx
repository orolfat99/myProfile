export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        {/* <img src="./img/about-me.png" alt="About Me" /> */}
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
            Hi, I’m Chih-Yu (John) Chuang, an Information Security professional
            with a Master’s in IT from QUT. I specialize in cybersecurity
            governance, compliance, and supply chain security, with hands-on
            experience leading ISO/IEC 27001:2022, TISAX, ISO 21434, ISO/IEC
            27701, and IEC 62443 certification projects across multiple
            countries.
          </p>
          <p className="hero--section-description">
            I’m passionate about building strong, business-aligned security
            frameworks that drive trust and resilience. My background spans
            IT/OT security governance, risk management, and international
            certification programs for enterprise clients. Beyond compliance, I
            enjoy translating complex security standards into practical,
            scalable solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
