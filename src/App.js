import {Route, Routes} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import People from './pages/People';
import Splashes from './pages/Splashes';
import Publications from './pages/Publications';
import Projects from './pages/Projects';
import ResourcesOpportunities from './pages/ResourcesOpportunities';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path='/think-lab' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/people' element={<People />} />
        <Route path='/splashes' element={<Splashes />} />
        <Route path='/publications' element={<Publications />} />
        <Route path='/resourcesopportunities' element={<ResourcesOpportunities />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;