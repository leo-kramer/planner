import { icons } from '../../types/loadicons.ts';
import { Link } from 'react-router-dom';
import '../../assets/scss/components/sections/menu.scss';

export default function Menu() {
  return (
    <nav className="menu">
      <ul className="profile">
        <li className="account">
          <Link to="/account">
            <img className="pfp" src="./src/assets/media/img/pfp.jpg" />
            Leo
          </Link>
        </li>
        <li className="contains-icon">
          <span className="icon" dangerouslySetInnerHTML={{ __html: icons.inbox }}></span>
          Inbox
        </li>
      </ul>

      <ul className="pages">
        <div className="top">
          <li className="primary">
            <Link to="/">
              <span className="icon" dangerouslySetInnerHTML={{ __html: icons.home }}></span>
              Home
            </Link>
          </li>
          <li>
            <Link to="/tasks">
              <span className="icon" dangerouslySetInnerHTML={{ __html: icons.tasks }}></span>
              Tasks
            </Link>
          </li>
        </div>
        <div className="bottom">
          <li>
            <Link to="/settings">
              <span className="icon" dangerouslySetInnerHTML={{ __html: icons.settings }}></span>
              Settings
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}
