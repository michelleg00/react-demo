import { Routes, Route } from 'react-router-dom';

import Hero from "./components/Hero"
import GridSphere from "./components/GridSphere"
import MetaBalls from "./components/MetaBalls"
import AboutMe from './pages/AboutMe';
import LinkList from './components/LinkList';

function Home() {
  return (
    <>

      <LinkList />
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
      <Route path="/" element={<Home />} />
      <Route path="/aboutme" element={<AboutMe />} />
    </Routes>
  );
}



export default App;