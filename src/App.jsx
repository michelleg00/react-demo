import Hero from "./Hero"
import HeroImage from "./HeroImage"
import GridSphere from "./GridSphere"

function App() {
  return (<div className="min-h-screen bg-black">
    <Hero />
    {/* <HeroImage /> */}
    <div className="flex justify-center items-center"> <GridSphere />
    </div>
  </div>
  );
}

export default App;