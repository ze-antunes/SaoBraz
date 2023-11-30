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
        <div className="bg"></div>
        <Switch>
          <Route exact path="/SaoBraz/">
            <Homepage />
          </Route>
          <Route exact path="/SaoBraz/historia">
            <Historia />
          </Route>
          <Route exact path="/SaoBraz/atividades">
            <Atividades />
          </Route>
          <Route exact path="/SaoBraz/mordomos">
            <Mordomos />
          </Route>
          <Route exact path="/SaoBraz/contactos">
            <Contactos />
          </Route>
          <Route path="/SaoBraz/*">
            <ErrorPage404 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
