import "./Post.css";

const Post = ({ avatar, username, location, image, timestamp }) => {
  return (
    <div className="Post">
      <div className="header">
        <img className="avatar" src={avatar} alt="Avatar" />

        <div className="meta">
          <span className="username">{username}</span>
          <span className="location">{location}</span>
        </div>
      </div>

      <img className="img-fluid" src={image} alt="Alt Text" />

      <div className="actions">
        <div className="like">
          <span class="material-icons">favorite_border</span>
        </div>
        <div className="comment">
          <span class="material-icons">chat_bubble_outline</span>
        </div>
        <div className="send">
          <span class="material-icons">send</span>
        </div>
        <div className="bookmark">
          <span class="material-icons">bookmark</span>
        </div>
      </div>

      <div className="timestamp">{timestamp}</div>
    </div>
  );
};

export default Post;
