import { useHistory } from 'react-router-dom';

const Characters = ({ characters }) => {
  console.log(characters);
  const history = useHistory();

  const onEdit = id => {
    history.push(`/characters/${id}`);
  };

  return (
    <ul>
      {characters &&
        characters.map(character => {
          console.log(character);
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
