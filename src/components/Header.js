import { NavLink } from 'react-router-dom';
import { StyledHeader } from '../styles/components/StyledHeader';
import logo from '../assets/images/rickandmorty.png';

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
      <img className='logo' src={logo} alt='Rick and Morty' />
      <nav>
        <ul className='nav__list'>
          {headerItems.map(item => (
            <li key={item.id}>
              <NavLink to={item.path}>{item.title}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </StyledHeader>
  );
};

export default Header;
