import { Outlet, Link } from 'react-router-dom';

import './index.css';

const Private = () => {

  return (
    <div>
      <h1>Lazy Loading Example - Private Area</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Dashboard">Dashboard</Link></li>
          <li><Link to="/Settings">Settings</Link></li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );

}

export default Private;
