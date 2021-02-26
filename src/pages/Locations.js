import { useState, useEffect, useCallback, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  getLocations,
  getMoreLocations,
  getSearchLocations
} from '../redux/ducks/locationsDucks';
import { StyledLocations } from '../styles/pages/StyledLocations';

const Locations = () => {
  const [loadMore, setLoadMore] = useState(true);
  const [search, setSearch] = useState('');
  const history = useHistory();
  const { locations, url } = useSelector(({ locations }) => locations);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLocations());
  }, [dispatch]);

  const observer = useRef();
  const lastLocation = useCallback(
    character => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && url && loadMore) {
          dispatch(getMoreLocations(url));
        }
      });
      if (character) observer.current.observe(character);
    },
    [url, loadMore, dispatch]
  );

  const onFindLocation = e => {
    e.preventDefault();
    if (!search.trim()) {
      setLoadMore(true);
      dispatch(getLocations());
    } else {
      setLoadMore(false);
      dispatch(getSearchLocations(search));
    }
  };

  const onEdit = id => {
    history.push(`/locations/${id}`);
  };

  return (
    <StyledLocations>
      <form className='search__wrapper'>
        <input
          type='text'
          onChange={e => setSearch(e.target.value)}
          input={search}
          placeholder='Search characters'
        />
        <button onClick={onFindLocation}>Search</button>
      </form>
      <ul className='locations__list'>
        {locations &&
          locations.map((location, index) => {
            if (locations.length === index + 1) {
              return (
                <li
                  onClick={() => onEdit(location.id)}
                  ref={lastLocation}
                  key={`${location.id}-${index}`}
                >
                  <h4>{location.name}</h4>
                </li>
              );
            } else {
              return (
                <li
                  onClick={() => onEdit(location.id)}
                  key={`${location.id}-${index}`}
                >
                  <h4>{location.name}</h4>
                </li>
              );
            }
          })}
      </ul>
    </StyledLocations>
  );
};

export default Locations;
