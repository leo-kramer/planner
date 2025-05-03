import { icons } from '../../types/loadicons.ts';
import { Link } from 'react-router-dom';
import { useBreakpoint } from '../../types/breakpoint-context.ts';
import '../../assets/scss/components/sections/menu.scss';

const SmallMenu = () => {
  return (
    <ul className="pages">
      <div className="top">
        <li className="active">
          <Link to="/">
            <span className="icon" dangerouslySetInnerHTML={{ __html: icons.home }}></span>
            <span className="label">Home</span>
          </Link>
        </li>
        <li>
          <Link to="/tasks">
            <span className="icon" dangerouslySetInnerHTML={{ __html: icons.tasks }}></span>
            <span className="label">Tasks</span>
          </Link>
        </li>
      </div>
      <div className="bottom">
        <li className="account">
          <Link to="/account">
            <img className="pfp" src="./src/assets/media/img/pfp.jpg" />
            <span className="label">Leo</span>
          </Link>
        </li>
      </div>
    </ul>
  );
};

const LargeMenu = () => {
  return (
    <>
      <ul className="profile">
        <li className="account">
          <Link to="/account">
            <img className="pfp" src="./src/assets/media/img/pfp.jpg" />
            <span className="label">Leo</span>
          </Link>
        </li>
        <li className="contains-icon">
          <span className="icon" dangerouslySetInnerHTML={{ __html: icons.inbox }}></span>
          <span className="label">Inbox</span>
        </li>
      </ul>

      <ul className="pages">
        <div className="top">
          <li className="active">
            <Link to="/">
              <span className="icon" dangerouslySetInnerHTML={{ __html: icons.home }}></span>
              <span className="label">Home</span>
            </Link>
          </li>
          <li>
            <Link to="/tasks">
              <span className="icon" dangerouslySetInnerHTML={{ __html: icons.tasks }}></span>
              <span className="label">Tasks</span>
            </Link>
          </li>
        </div>
        <div className="bottom">
          <li>
            <Link to="/settings">
              <span className="icon" dangerouslySetInnerHTML={{ __html: icons.settings }}></span>
              <span className="label">Settings</span>
            </Link>
          </li>
        </div>
      </ul>
    </>
  );
};

export default function Menu() {
  const breakpoint = useBreakpoint();
  console.log(breakpoint);

  return (
    <nav className="menu">{['xs', 'sm'].includes(breakpoint) ? <SmallMenu /> : <LargeMenu />}</nav>
  );
}
