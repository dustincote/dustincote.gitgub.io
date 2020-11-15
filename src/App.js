import logo from './logo.svg';
import './App.css';
import CanvasFlower from './CanvasFlower/CanvasFlower';
import Portfolio from './Home/Portfolio';
import Canvas from './Canvas/Canvas';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route
        exact
        path="/"
        >
            <Portfolio />

          {/* <CanvasFlower /> */}
        </Route>

        <Route path="/canvas">
          <Canvas />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
