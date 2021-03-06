import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import Create from './Create';
import PostDetails from './PostDetails';

function App() {

  const title = 'Jobbie';

  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className='content'>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/posts/:id">
            <PostDetails />
          </Route>
        </Switch>
        <p></p>
      </div>
    </div>
    </Router>
  );
}

export default App;