import propTypes from 'prop-types';
import './Friends.css'
// ? // Компонент списку друзів ;
export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => {
        return (
          <li key={friend.id} className="friend-list__item">
            {friend.isOnline ? (
              <span className="online-status"></span>
            ) : (
              <span className="offline-status"></span>
            )}
            <img
              className="user__avatar"
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <p className="user__name">{friend.name}</p>
          </li>
        );
      })}
    </ul>
  );
};
FriendList.propTypes = {
    friends: propTypes.array.isRequired
  }