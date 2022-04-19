import { Link } from "react-router-dom";
import { MdOutlineAccountCircle } from "react-icons/md";

const Nav = ({ linkStyle }) => {
  return (
    <nav className="nav">
      <div className="nav_logo">
        <Link style={linkStyle} to="/">
          <h1>
            Yao<span>s</span>
          </h1>
        </Link>
      </div>
      <div className="nav_account">
        <Link style={linkStyle} to="/account/login">
          <MdOutlineAccountCircle />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
