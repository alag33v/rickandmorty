import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BiArrowBack } from 'react-icons/bi';
import { StyledEpisodeItem } from '../styles/components/StyledEpisodeItem';

const EpisodeItem = ({ match }) => {
  const history = useHistory();
  const episodes = useSelector(({ episodes }) => episodes.episodes);

  const episodesFilter = episodes.filter(
    episode => String(episode.id) === match.params.id
  );
  const episode = episodesFilter[0];

  const onComeBack = () => {
    history.push('/episodes');
  };

  return (
    <StyledEpisodeItem>
      <div className='episode__info'>
        <span>Episode: {episode.episode}</span>
        <span>Name: {episode.name}</span>
        <span>Air date: {episode.air_date}</span>
      </div>
      <BiArrowBack className='back' onClick={onComeBack} />
    </StyledEpisodeItem>
  );
};

export default EpisodeItem;
