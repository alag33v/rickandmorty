import { Link } from 'react-router-dom';

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
    <div>
      <h1>Rick and Morty</h1>
      <ul>
        {headerItems.map(item => (
          <li key={item.id}>
            <Link to={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
