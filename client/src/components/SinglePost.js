const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePost_left">
        <div className="left_image">
          <img src="https://live.staticflickr.com/65535/49341847297_fbed5b02d5_b.jpg" />
        </div>
        <div className="left_desc">
          <pre>
            {`
Classic collection for a rare BMW E30 318i (M) Year 84/85 
* Original condition. 
* Manual 1.8cc. 
* Leather seat. 
* Most wear and tear done. 
* Buy and drive condition. 
* No wheels.
            `}
          </pre>
        </div>
      </div>
      <div className="singlePost_right"></div>
    </div>
  );
};

export default SinglePost;
