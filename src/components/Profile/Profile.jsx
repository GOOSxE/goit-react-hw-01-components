import propTypes from 'prop-types';
import css from './Profile.module.css';
// ? // Компонент профілю створений за допомогою jsx ;
export const Profile = ({ avatar, username, tag, location, stats }) => (
  <div className={css['profile']}>
    <div className={css['profile-description']}>
      <img
        src={avatar}
        alt="User Avatar"
        width={'140px'}
        className={css['description__avatar']}
      />
      <p className={css['description__name']}>{username}</p>
      <p className={css['description__tag']}>@{tag}</p>
      <p className={css['description__location']}>{location}</p>
    </div>
    <ul className={css['profile__stats']}>
      <li className={css['stats__item']}>
        <span className={css['stats-item__label']}>Followers: </span>
        <span className={css['stats-item__quantity']}>{stats.followers}</span>
      </li>
      <li className={css['stats__item']}>
        <span className={css['stats-item__label']}>Views: </span>
        <span className={css['stats-item__quantity']}>{stats.views}</span>
      </li>
      <li className={css['stats__item']}>
        <span className={css['stats-item__label']}>Likes: </span>
        <span className={css['stats-item__quantity']}>{stats.likes}</span>
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
