import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Characters, CharacterItem } from './components';

const App = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const json = await response.json();
      setCharacters(json.results);
    };
    fetchData();
  }, []);

  return (
    <Router>
      <div>Rick and Morty</div>
      <Switch>
        <Route exact path='/characters'>
          <Characters characters={characters} />
        </Route>
        <Route exact path='/characters/:id' component={CharacterItem} />
      </Switch>
    </Router>
  );
};

export default App;
