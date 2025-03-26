import Navbar from './components/Navbar';
import Home from './components/Home';
// import Provider from './components/Provider';
import Choose from './components/Choise';
import Bussiness from './components/Solution';
import Contact from './components/About';
import SliderTest from './components/SliderTest';

export default function MainApp() {
  return (
    <div className="overflow-x-hidden bg-black">
      <Navbar />
      <Home />

      {/* <Provider /> */}
    
      <div >
        <SliderTest />
      </div>

      <div className="mt-12 md:mt-24 lg:mt-48">
        <Choose />
      </div>

      <div className="mt-12 md:mt-24 lg:mt-56">
        <Bussiness />
      </div>

      <div className="mt-12 lg:mt-24 lg:pt-6">
        <Contact />
      </div>
    </div>
  );
}
