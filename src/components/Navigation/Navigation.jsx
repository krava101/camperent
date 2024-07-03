import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';

function Navigation() {
  const navLink = ({ isActive }) => clsx(css.link, isActive && css.active);
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink className={css.logo} to={'/'}>
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
