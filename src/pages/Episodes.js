import { useState, useEffect, useCallback, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  getEpisodes,
  getMoreEpisodes,
  getSearchEpisodes
} from '../redux/ducks/episodesDucks';
import { StyledEpisodes } from '../styles/pages/StyledEpisodes';

const Episodes = () => {
  const [loadMore, setLoadMore] = useState(true);
  const [search, setSearch] = useState('');
  const history = useHistory();
  const { episodes, url } = useSelector(({ episodes }) => episodes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEpisodes());
  }, [dispatch]);

  const observer = useRef();
  const lastEpisode = useCallback(
    character => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && url && loadMore) {
          dispatch(getMoreEpisodes(url));
        }
      });
      if (character) observer.current.observe(character);
    },
    [url, loadMore, dispatch]
  );

  const onFindEpisode = e => {
    e.preventDefault();
    if (!search.trim()) {
      setLoadMore(true);
      dispatch(getEpisodes());
    } else {
      setLoadMore(false);
      dispatch(getSearchEpisodes(search));
    }
  };

  const onEdit = id => {
    history.push(`/episodes/${id}`);
  };

  return (
    <StyledEpisodes>
      <form className='search__wrapper'>
        <input
          type='text'
          onChange={e => setSearch(e.target.value)}
          input={search}
          placeholder='Search episodes'
        />
        <button onClick={onFindEpisode}>Search</button>
      </form>
      <ul className='episodes__list'>
        {episodes &&
          episodes.map((episode, index) => {
            if (episodes.length === index + 1) {
              return (
                <li
                  onClick={() => onEdit(episode.id)}
                  ref={lastEpisode}
                  key={`${episode.id}-${index}`}
                >
                  <h4>{episode.episode}</h4>
                </li>
              );
            } else {
              return (
                <li
                  onClick={() => onEdit(episode.id)}
                  key={`${episode.id}-${index}`}
                >
                  <h4>{episode.episode}</h4>
                </li>
              );
            }
          })}
      </ul>
    </StyledEpisodes>
  );
};

export default Episodes;
