import { IoSend } from "react-icons/io5";

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
      <div className="singlePost_right">
        <div className="singlePost_activity">
          <h2 className="activity_banner">Activity</h2>
          <div className="activity_log">
            <p>John just bid $5000</p>
            <p>Peter just bid $10,000</p>
            <p>Jane just bid $50,000</p>
            <p>Chris just bid $70,500</p>
          </div>
          <div className="activity_input">
            <div className="input">
              <input type="text" placeholder="Type your message here..." />
              <div className="line"></div>
            </div>
            <div>
              <button className="send_btn">
                <IoSend />
              </button>
            </div>
          </div>
          <div className="activity_bid">
            <input type="Number" placeholder="Amount" />
            <button>Bid</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
