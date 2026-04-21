import Hero from "./Hero"
import GridSphere from "./components/GridSphere"
import MetaBalls from "./MetaBalls"

function App() {
  return (<div className="min-h-screen bg-black">
    <Hero />
    <div className="flex justify-center items-center"> 
      <GridSphere />
      {/* <MetaBalls /> */}
    </div>
  </div>
  );
}

export default App;