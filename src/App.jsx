import Hero from "./Hero"
import HeroImage from "./HeroImage"
import GridSphere from "./GridSphere"
import MetaBalls from "./MetaBalls"

function App() {
  return (<div className="min-h-screen bg-black">
    <Hero />
    {/* <HeroImage /> */}
    <div className="flex justify-center items-center"> 
      <GridSphere />
      {/* <MetaBalls /> */}
    </div>
  </div>
  );
}

export default App;