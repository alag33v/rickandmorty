import { useState, useEffect, useCallback, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  addCharacters,
  addMoreCharacters
} from '../redux/ducks/charactersDucks';
import { StyledCharacters } from '../styles/components/StyledCharacters';

const Characters = () => {
  const [url, setUrl] = useState('');
  const history = useHistory();
  const characters = useSelector(({ characters }) => characters.characters);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await fetch(
        'https://rickandmortyapi.com/api/character?page=1'
      );
      const json = await response.json();
      setUrl(json.info.next);
      dispatch(addCharacters(json.results));
    };
    fetchCharacters();
  }, [dispatch]);

  const fetchMoreCharacters = useCallback(
    async endpoint => {
      const response = await fetch(endpoint);
      const json = await response.json();
      setUrl(json.info.next);
      dispatch(addMoreCharacters(json.results));
    },
    [dispatch]
  );

  const observer = useRef();
  const lastCharacter = useCallback(
    character => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && url) {
          fetchMoreCharacters(url);
        }
      });
      if (character) observer.current.observe(character);
    },
    [fetchMoreCharacters, url]
  );

  const onEdit = id => {
    history.push(`/characters/${id}`);
  };

  return (
    <StyledCharacters>
      <ul className='characters__list'>
        {characters &&
          characters.map((character, index) => {
            if (characters.length === index + 1) {
              return (
                <li
                  onClick={() => onEdit(character.id)}
                  ref={lastCharacter}
                  key={character.id}
                >
                  <h4>Name: {character.name}</h4>
                  <img src={character.image} alt={character.name} />
                </li>
              );
            } else {
              return (
                <li onClick={() => onEdit(character.id)} key={character.id}>
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
