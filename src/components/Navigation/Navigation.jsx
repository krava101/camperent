import { NavLink } from 'react-router-dom';
import scss from './Navigation.module.scss';
import clsx from 'clsx';

function Navigation() {
  const navLink = ({ isActive }) => clsx(scss.link, isActive && scss.active);
  return (
    <header className={scss.header}>
      <nav>
        <NavLink className={scss.logo} to={'/'}>
          CampeR<span>ent</span>
        </NavLink>
        <ul>
          <li>
            <NavLink className={navLink} to={'/catalog'}>
              Catalog
            </NavLink>
          </li>
          <li>
            <NavLink className={navLink} to={'/favorites'}>
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
