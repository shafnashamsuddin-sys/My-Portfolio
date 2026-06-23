import Profile from "../Profile.jpg";

function Hero() {
  return (
    <section className="hero">

      <img
        src={Profile}
        alt="Profile"
        className="Profile-pic"
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
