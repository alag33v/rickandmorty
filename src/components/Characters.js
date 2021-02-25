import { useState, useEffect, useCallback, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  addCharacters,
  addMoreCharacters,
  searchCharacters
} from '../redux/ducks/charactersDucks';
import { StyledCharacters } from '../styles/components/StyledCharacters';

const Characters = () => {
  const [url, setUrl] = useState('');
  const [loadMore, setLoadMore] = useState(true);
  const [search, setSearch] = useState('');
  const history = useHistory();
  const characters = useSelector(({ characters }) => characters.characters);
  const dispatch = useDispatch();

  const fetchCharacters = useCallback(async () => {
    const response = await fetch(
      'https://rickandmortyapi.com/api/character?page=1'
    );
    const json = await response.json();
    setUrl(json.info.next);
    dispatch(addCharacters(json.results));
  }, [dispatch]);

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters, dispatch]);

  const fetchMoreCharacters = useCallback(
    async endpoint => {
      const response = await fetch(endpoint);
      const json = await response.json();
      setUrl(json.info.next);
      dispatch(addMoreCharacters(json.results));
    },
    [dispatch]
  );

  const fetchSearchCharacters = async endpoint => {
    const response = await fetch(endpoint);
    const json = await response.json();
    console.log(json.results);
    dispatch(searchCharacters(json.results));
  };

  const observer = useRef();
  const lastCharacter = useCallback(
    character => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && url && loadMore) {
          fetchMoreCharacters(url);
        }
      });
      if (character) observer.current.observe(character);
    },
    [fetchMoreCharacters, url, loadMore]
  );

  const onFindCharacter = e => {
    e.preventDefault();
    if (!search.trim()) {
      setLoadMore(true);
      fetchCharacters();
    } else {
      setLoadMore(false);
      fetchSearchCharacters(
        `https://rickandmortyapi.com/api/character/?name=${search}`
      );
    }
  };

  const onEdit = id => {
    history.push(`/characters/${id}`);
  };

  return (
    <StyledCharacters>
      <form className='search__wrapper'>
        <input
          type='text'
          onChange={e => setSearch(e.target.value)}
          input={search}
          placeholder='Search characters'
        />
        <button onClick={onFindCharacter}>Search</button>
      </form>
      <ul className='characters__list'>
        {characters &&
          characters.map((character, index) => {
            if (characters.length === index + 1) {
              return (
                <li
                  onClick={() => onEdit(character.id)}
                  ref={lastCharacter}
                  key={`${character.id}-${index}`}
                >
                  <h4>Name: {character.name}</h4>
                  <img src={character.image} alt={character.name} />
                </li>
              );
            } else {
              return (
                <li
                  onClick={() => onEdit(character.id)}
                  key={`${character.id}-${index}`}
                >
                  <h4>Name: {character.name}</h4>
                  <img src={character.image} alt={character.name} />
                </li>
              );
            }
          })}
      </ul>
    </StyledCharacters>
  );
};

export default Characters;
