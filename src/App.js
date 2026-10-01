import {Navigate, Route, Routes} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import People from './pages/People';
import Splashes from './pages/Splashes';
import Publications from './pages/Publications';
import Projects from './pages/Projects';
import Resources from './pages/Resources';
import JoinUs from './pages/JoinUs';
import Workshops from './pages/Workshops';
import ResilientWorkshop2026 from './pages/ResilientWorkshop2026';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/people' element={<People />} />
        <Route path='/splashes' element={<Splashes />} />
        <Route path='/publications' element={<Publications />} />
        <Route path='/workshops' element={<Workshops />} />
        <Route path='/workshops/resilient-societies-2026' element={<ResilientWorkshop2026 />} />
        <Route path='/resources' element={<Resources />} />
        <Route path='/joinus' element={<JoinUs />} />
        {/* old combined page */}
        <Route path='/resourcesopportunities' element={<Navigate to='/resources' replace />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;