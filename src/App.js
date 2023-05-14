
import './App.css';
import Navbar from './Navbar';
import Home from './Home.js';
import About from './About';
import Posts from './Posts';



function App() {
  const name="chawkii";
  const wbs="youtube.com";
  return (
    
    <div className="App">
      <Navbar/>
      <Posts/>

      <Home/>
        <p>
          {name}
        </p>
        <a href={wbs}>YOUTUBE</a>
       
      <About/>
    </div>
  );
}

export default App;
