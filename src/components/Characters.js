import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Characters = () => {
  const history = useHistory();
  const characters = useSelector(({ characters }) => characters.characters);

  const onEdit = id => {
    history.push(`/characters/${id}`);
  };

  return (
    <ul>
      {characters &&
        characters.map(character => {
          return (
            <li key={character.id} onClick={() => onEdit(character.id)}>
              <h4>Name: {character.name}</h4>
              <img src={character.image} alt={character.name} />
            </li>
          );
        })}
    </ul>
  );
};

export default Characters;
