import profile from "../profile.jpg";

function Hero() {
  return (
    <section className="hero">

      <img
        src={profile}
        alt="Profile"
        className="profile-pic"
      />

      <h1>Shafna Shamsuddin</h1>

      <h2>B.Tech CSE (Data Science)</h2>

      <p>
        Passionate about web development,
        programming and data science.
        
      </p>

    </section>
  );
}

export default Hero;