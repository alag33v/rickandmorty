import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header, CharacterItem, LocationItem, EpisodeItem } from './components';
import { Characters, Locations, Episodes } from './pages';
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
        <Route exact path='/episodes' component={Episodes} />
        <Route exact path='/episodes/:id' component={EpisodeItem} />
      </Switch>
    </Router>
  );
};

export default App;
