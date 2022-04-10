import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {

  const title = 'Jobbie';

  return (
    <div className="App">
      <Navbar/>
      <div className='content'>
        <Home />
        <p></p>
      </div>
    </div>
  );
}

export default App;