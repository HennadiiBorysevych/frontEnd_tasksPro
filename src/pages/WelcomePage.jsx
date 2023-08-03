import { NavLink } from 'react-router-dom';
import userAvtr from '../assets/images/welcomeAndPlate/welcome.png';

const fill = {
  fill: 'white',
};

const WelcomePage = () => {
  return (
    <section className="welcome">
      <div>
        <div>
          <img src={userAvtr} alt="user-avatar" />
          <div className="appName">
            <svg width="32" height="32">
              <path d="M26.667 0h-21.333c-2.946 0-5.333 2.388-5.333 5.333v21.333c0 2.946 2.388 5.333 5.333 5.333h21.333c2.946 0 5.333-2.388 5.333-5.333v-21.333c0-2.946-2.388-5.333-5.333-5.333z"></path>
              <path
                style={fill}
                d="M13.331 23.027c0.244-1.272 0.453-2.61 0.747-3.949 0.145-0.701-0.032-0.999-0.815-0.946s-1.657 0.027-2.49 0c-0.833-0.027-0.982-0.446-0.502-1.044 2.363-2.918 4.753-5.8 7.134-8.674 0.267-0.326 0.575-0.558 1.014-0.312s0.349 0.549 0.276 0.915c-0.263 1.339-0.48 2.677-0.77 3.989-0.149 0.678 0.045 0.919 0.751 0.892 0.709-0.036 1.419-0.036 2.127 0 0.403 0 0.932-0.21 1.141 0.339s-0.231 0.781-0.453 1.107c-0.905 1.115-1.823 2.229-2.752 3.342-1.361 1.624-2.711 3.242-4.051 4.854-0.263 0.317-0.557 0.571-1.005 0.41s-0.353-0.54-0.353-0.924z"
              ></path>
            </svg>
            <h1>Task Pro</h1>
          </div>
        </div>
        <p>
          Supercharge your productivity and take control of your tasks with Task
          Pro - Don't wait, start achieving your goals now!
        </p>
        <div className="navigation">
          <NavLink to="auth/register">Registration</NavLink>
          <NavLink to="auth/login">Log In</NavLink>
        </div>
      </div>
    </section>
  );
};

export default WelcomePage;
