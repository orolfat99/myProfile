export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Chih-Yu (John) Chuang</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">
              Cybersecurity Compliance / Regulation
            </span>{" "}
            <br />& IT / OT Security Specialist
          </h1>
          <p className="hero--section-description">
            IT/OT Security Compliance/ Regulation
            <br /> Help your organization stay secure with my expertise in
            cybersecurity.
          </p>
        </div>
        <button
          className="btn btn-primary"
          onClick={() =>
            document
              .getElementsByClassName("text-lg")[0]
              .scrollIntoView({ behavior: "smooth" })
          }>
          Get In Touch
        </button>
      </div>
      <div className="hero--section--img">
        <img src="./img/head.jpg" alt="Hero Section" />
      </div>
      {/* <div className="bg-shape one"></div>
      <div className="bg-shape two"></div> */}
    </section>
  );
}
