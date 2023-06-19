import propTypes from 'prop-types';
import './Profile.css';
// ? // Компонент профілю створений за допомогою jsx ;
export const Profile = ({ avatar, username, tag, location, stats }) => (
  <div className="profile">
    <div className="profile__description">
      <img
        src={avatar}
        alt="User Avatar"
        width={'140px'}
        className="description__avatar"
      />
      <p className="description__name">{username}</p>
      <p className="description__tag">@{tag}</p>
      <p className="description__location">{location}</p>
    </div>
    <ul className="profile__stats">
      <li className="stats-item">
        <span className="stats-item__label">Followers: </span>
        <span className="stats-item__quantity">{stats.followers}</span>
      </li>
      <li className="stats-item">
        <span className="stats-item__label">Views: </span>
        <span className="stats-item__quantity">{stats.views}</span>
      </li>
      <li className="stats-item">
        <span className="stats-item__label">Likes: </span>
        <span className="stats-item__quantity">{stats.likes}</span>
      </li>
    </ul>
    {/* {children} */}
  </div>
);
Profile.propTypes = {
    avatar: propTypes.string.isRequired,
    username: propTypes.string.isRequired,
    tag: propTypes.string.isRequired,
    location: propTypes.string.isRequired,
    stats: propTypes.object.isRequired,
};
