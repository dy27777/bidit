import { Link } from "react-router-dom";

const Post = ({ linkStyle }) => {
  return (
    <Link style={linkStyle} to="/test/singlePost">
      <div className="post">
        <img
          src="https://i.ytimg.com/vi/KKUVoPAzU4A/maxresdefault.jpg"
          className="post_img"
        />
        <h3>1989 bmw e30 coupe (abandoned)</h3>
        <p>Highest Bid Now: 35,000</p>
        <div className="post_bar"></div>
      </div>
    </Link>
  );
};

export default Post;
