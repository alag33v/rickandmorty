import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header, Characters, CharacterItem } from './components';
import { GlobalStyle } from './styles/GlobalStyle';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path='/characters' component={Characters} />
        <Route exact path='/characters/:id' component={CharacterItem} />
      </Switch>
    </Router>
  );
};

export default App;
