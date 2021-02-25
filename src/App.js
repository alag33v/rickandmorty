import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Header, Characters, CharacterItem } from './components';
import { addCharacters } from './redux/ducks/charactersDucks';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const json = await response.json();
      dispatch(addCharacters(json.results));
    };
    fetchData();
  }, [dispatch]);

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
