import propTypes from 'prop-types';
import css from './Friends.module.css';
// ? // Компонент списку друзів ;
export const FriendList = ({ friends }) => {
  return (
    <ul className={css['friends-list']}>
      {friends.map(friend => {
        return (
          <li key={friend.id} className={css['friends-list__item']}>
            {friend.isOnline ? (
              <span className={css['online-status']}></span>
            ) : (
              <span className={css['offline-status']}></span>
            )}
            <img
              className={css['friends__avatar']}
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <p className={css['friends__name']}>{friend.name}</p>
          </li>
        );
      })}
    </ul>
  );
};
FriendList.propTypes = {
  friends: propTypes.array.isRequired,
};
