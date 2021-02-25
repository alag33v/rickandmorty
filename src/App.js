import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header, Characters, CharacterItem } from './components';

const App = () => {
  return (
    <Router>
      <Header />
      <div>Rick and Morty</div>
      <Switch>
        <Route exact path='/characters' component={Characters} />
        <Route exact path='/characters/:id' component={CharacterItem} />
      </Switch>
    </Router>
  );
};

export default App;
