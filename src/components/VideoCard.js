import "../styles/VideoCard.css";
import Avatar from "@material-ui/core/Avatar";

function VideoCard({
  image,
  title,
  channelName,
  channelAvatar,
  views,
  timestamp
}) {
  return (
    <div className="videoCard">
      <img className="videoCard__thumbnail" src={image} />
      <div className="videoCard__info">
        <Avatar
          className="videoCard__avatar"
          src={channelAvatar}
          alt={channelName}
        />
        <div className="videoCard__text">
          <h4>{title}</h4>
          <p>{channelName}</p>
          <p>
            {views} • {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
