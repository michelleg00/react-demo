import { Routes, Route } from 'react-router-dom';

import Hero from "./components/Hero"
import GridSphere from "./components/GridSphere";
import MetaBalls from "./components/MetaBalls";
import AboutMe from "./pages/AboutMe";
import LinkList from "./components/LinkList";
import Layout from "./Layout";




function Home() {
  return (
    <>
    <Layout>
      {/* <LinkList /> */}
      <div className="min-h-screen bg-black">
        <Hero />
        <div className="flex justify-center items-center">
          <GridSphere />
        </div>
      </div>
      </Layout>

    </>
  );
}


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutMe />} />
      </Route>
    </Routes>
  );
}



export default App;