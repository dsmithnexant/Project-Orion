import logo from './logo.svg';
import './App.css';
import Tabs from "./components/Tabs"; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Project Orion</h1> 
       <p>-Welcome to the Project Orion HomePage-</p> 
       <Tabs> 
       <div label="Gator"> 
         See ya later, <em>Alligator</em>! 
       </div> 
       <div label="Croc"> 
         After 'while, <em>Crocodile</em>! 
       </div> 
       <div label="Sarcosuchus"> 
         Nothing to see here, this tab is <em>extinct</em>! 
       </div> 
      </Tabs> 
      </header>
    </div>
  );
}

export default App;
