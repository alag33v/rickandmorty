import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StyledLocationItem } from '../styles/components/StyledLocationItem';
import { BiArrowBack } from 'react-icons/bi';

const LocationsItem = ({ match }) => {
  const history = useHistory();
  const locations = useSelector(({ locations }) => locations.locations);

  const locationsFilter = locations.filter(
    location => String(location.id) === match.params.id
  );
  const location = locationsFilter[0];

  const onComeBack = () => {
    history.push('/locations');
  };

  return (
    <StyledLocationItem>
      <div className='location__info'>
        <span>Name: {location.name}</span>
        <span>Type: {location.type}</span>
        <span>Dimension: {location.dimension}</span>
      </div>
      <BiArrowBack className='back' onClick={onComeBack} />
    </StyledLocationItem>
  );
};

export default LocationsItem;
