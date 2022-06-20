import { NavLink } from "react-router-dom";

const Nav = () => {
  return(
    <nav className="nav">
      <div className="navWrapper">
      <h1>
        The Future Academy
      </h1>
      <ul className="links">
        <NavLink
          className="link"
          to="/" 
          style={({ isActive }) => ({ color: isActive ? '#0288d1' : '' })}
        >
          HOME
        </NavLink>
        <NavLink
          className="link"
          to="/Courses"
          style={({ isActive }) => ({ color: isActive ? '#0288d1' : '' })}
        >
          COURSES
        </NavLink>
        <NavLink
          className="link"
          to="/Contact"
          style={({ isActive }) => ({ color: isActive ? '#0288d1' : '' })}
        >
          CONTACT US
        </NavLink>
      </ul>
      </div>
    </nav>
  )
};
export default Nav; 