import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Historia from './pages/Historia';
import Atividades from './pages/Atividades';
import Mordomos from './pages/Mordomos';
import Contactos from './pages/Contactos';
import ErrorPage404 from './pages/ErrorPage404';


function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/historia">
              <Historia />
            </Route>
            <Route exact path="/atividades">
              <Atividades />
            </Route>
            <Route exact path="/mordomos">
              <Mordomos />
            </Route>
            <Route exact path="/contactos">
              <Contactos />
            </Route>
            <Route path="*">
              <ErrorPage404 />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
