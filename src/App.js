import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header, CharacterItem, LocationItem } from './components';
import { Characters, Locations } from './pages';
import { GlobalStyle } from './styles/GlobalStyle';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path='/characters' component={Characters} />
        <Route exact path='/characters/:id' component={CharacterItem} />
        <Route exact path='/locations' component={Locations} />
        <Route exact path='/locations/:id' component={LocationItem} />
      </Switch>
    </Router>
  );
};

export default App;
