import profile from "./assets/profilepicture.png";


function HeroImage() {
  return (

      <img src={profile} 
      className="w-24 h-24 rounded-full object-cover" />
  );
}

export default HeroImage;