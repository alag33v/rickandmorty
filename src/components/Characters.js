import { useState, useEffect, useCallback, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  getSearchCharacters,
  getMoreCharacters,
  getCharacters
} from '../redux/ducks/charactersDucks';
import { StyledCharacters } from '../styles/components/StyledCharacters';

const Characters = () => {
  const [loadMore, setLoadMore] = useState(true);
  const [search, setSearch] = useState('');
  const history = useHistory();
  const { characters, url } = useSelector(({ characters }) => characters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  const observer = useRef();
  const lastCharacter = useCallback(
    character => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && url && loadMore) {
          dispatch(getMoreCharacters(url));
        }
      });
      if (character) observer.current.observe(character);
    },
    [url, loadMore, dispatch]
  );

  const onFindCharacter = e => {
    e.preventDefault();
    if (!search.trim()) {
      setLoadMore(true);
      dispatch(getCharacters());
    } else {
      setLoadMore(false);
      dispatch(getSearchCharacters(search));
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
