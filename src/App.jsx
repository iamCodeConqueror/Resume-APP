
import './App.css';
import Experience from './components/Experience/Experience';
import HomePage from './components/HomePage/HomePage';
import Navbar from "./components/Navbar/Navbar"
import TechStack from './components/TechStack/TechStack';

function App(){

  return (
    <>
      <div className="app">

      <Navbar/>
      <HomePage/>
        {/* App Component 
        <Greeting /> */}
        <TechStack/>
        <Experience/>
        

      </div>
    </>
  )

}
export default App
