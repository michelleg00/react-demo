import profilePic from "./assets/profilepicture.png";


function HeroImage() {
  return (

      <img src={profilePic} 
      className="w-150 h-150 object-cover" />
  );
}

export default HeroImage;