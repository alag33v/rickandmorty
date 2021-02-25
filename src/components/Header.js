import { NavLink } from 'react-router-dom';
import { StyledHeader } from '../styles/components/StyledHeader';

const Header = () => {
  const headerItems = [
    {
      id: '0',
      title: 'Characters',
      path: '/characters'
    },
    {
      id: '1',
      title: 'Locations',
      path: '/locations'
    },
    {
      id: '2',
      title: 'Episodes',
      path: '/episodes'
    }
  ];

  return (
    <StyledHeader>
      <h1 className='title'>Rick and Morty</h1>
      <nav>
        <ul className='nav__list'>
          {headerItems.map(item => (
            <li class key={item.id}>
              <NavLink to={item.path}>{item.title}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </StyledHeader>
  );
};

export default Header;
