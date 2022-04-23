import { Link } from "react-router-dom";
import { MdOutlineAccountCircle } from "react-icons/md";
import { ImHammer2 } from "react-icons/im";

const Nav = ({ linkStyle }) => {
  return (
    <nav className="nav">
      <div className="nav_logo">
        <Link style={linkStyle} to="/">
          <h1>
            Bidit
            <span>
              <ImHammer2 />
            </span>
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
