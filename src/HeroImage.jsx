import profilePic from "./assets/profilepicture.png";


function HeroImage() {
  return (
    <div className="flex justify-center items-center">
      <img src={profilePic}
        className="w-150 h-150 object-cover object-center" />
    </div>
  );
}

export default HeroImage;