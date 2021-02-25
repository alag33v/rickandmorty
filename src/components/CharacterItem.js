import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StyledCharacterItem } from '../styles/components/StyledCharacterItem';
import { BiArrowBack } from 'react-icons/bi';

const CharacterItem = ({ match }) => {
  const history = useHistory();
  const characters = useSelector(({ characters }) => characters.characters);

  const charactersFilter = characters.filter(
    character => String(character.id) === match.params.id
  );
  const character = charactersFilter[0];

  const onComeBack = () => {
    history.push('/characters');
  };

  return (
    <StyledCharacterItem>
      <h2 className='title'>Name: {character.name}</h2>
      <div className='character__wrapper'>
        <img src={character.image} alt={character.name} />
        <div className='character__info'>
          <span>Gender: {character.gender}</span>
          <span>Species: {character.species}</span>
          <span>Status: {character.status}</span>
          <span>Location: {character.location.name}</span>
        </div>
      </div>
      <BiArrowBack className='back' onClick={onComeBack} />
    </StyledCharacterItem>
  );
};

export default CharacterItem;
