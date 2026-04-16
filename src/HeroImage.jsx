import profile from "./assets/profilepicture.png";


function HeroImage() {
  return (
    <div className="hero-image">
      <img src={profile} alt="Profile" />
    </div>
  );
}

export default HeroImage;