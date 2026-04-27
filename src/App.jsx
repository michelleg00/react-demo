import { Routes, Route } from 'react-router-dom';

import Hero from "./components/Hero"
import GridSphere from "./components/GridSphere";
import AboutMe from "./pages/AboutMe";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Layout from "./Layout";





function Home() {
  return (
    <>
      <div className="min-h-screen bg-black">
        <Hero />
        <div className="flex justify-center items-center">
          <GridSphere />
        </div>
      </div>
    </>
  );
}


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutMe />} />
        <Route path="work" element={<Work />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}



export default App;