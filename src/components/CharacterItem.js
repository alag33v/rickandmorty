import { useSelector } from 'react-redux';

const CharacterItem = ({ match }) => {
  const characters = useSelector(({ characters }) => characters.characters);

  const charactersFilter = characters.filter(
    character => String(character.id) === match.params.id
  );
  const character = charactersFilter[0];
  console.log(character);

  return (
    <div>
      <h2>Name: {character.name}</h2>
      <div>Gender: {character.gender}</div>
      <img src={character.image} alt={character.name} />
      <div>Species: {character.species}</div>
      <div>Status: {character.status}</div>
      <div>Location: {character.location.name}</div>
    </div>
  );
};

export default CharacterItem;
