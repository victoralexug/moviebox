import { Link } from 'react-router-dom';
import logo from '../../images/tv.png';
import home from '../../images/Home.png';
import calendar from '../../images/Calendar.png';
import tv from '../../images/TV Show.png';
import movie from '../../images/Movie Projector.png';
import logout from '../../images/Logout.png';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <>
      <div className='sidebar'>
        {/* Logo */}
        <div className='sidebar-logo'>
          <Link to={`/`} >
            <img src={logo} alt="tv" className='logo'/>
            <span>MovieBox</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className='links-container'>
          <p><img src={home} alt="Home"/> <span>Home</span></p>
          <p className='active'><img src={movie} alt="Movies"/> <span>Movies</span></p>
          <p><img src={tv} alt="TV Series" /><span>TV Series</span></p>
          <p><img src={calendar} alt="Upcoming"/><span>Upcoming</span></p>
        </div>

        {/* Event Promotion */}
        <div className='event-container'>
          <h4>Play movie quizzes and earn free tickets</h4>
          <p>50k people are playing now</p>
          <button>Start Playing</button>
        </div>

        {/* Logout */}
        <div className='logout-container'>
          <img src={logout} alt="Logout" />
          <p>Log Out</p>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
