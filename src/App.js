import "./App.css";
import user from "./user.json/user.json";
import statistics from "./statistics-data.json/data.json";
import friendsData from "./friends.json/friends.json";
import transactionsData from "./transactions.json/transactions.json";
// ? // Компонент профілю створений за допомогою jsx ;
const Profile = ({ avatar = user.avatar, username, tag, location, stats }) => (
  <div className="profile">
    <div className="profile__description">
      <img
        src={avatar}
        alt="User Avatar"
        width={"140px"}
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
// ? // Компонент статистики користувача ;
const Statistics = ({ title = "", stats }) => {
  return (
    <section className="statistics">
      {title.length > 0 && <h2 className="statistics__title">{title}</h2>}
      <ul className="statistics__stat-list">
        {stats.map((stat) => {
          return (
            <li key={stat.id} className="stat-list__item">
              <span className="stat-item__label">{stat.label}: </span>
              <span className="stat-item__percentage">{stat.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
// ? // Компонент таблиці транзакцій ;
const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
// ? // Компонент списку друзів ;
const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map((friend) => {
        return (
          <li key={friend.id} className="friend-list__item">
            {friend.isOnline ? <span className="online-status"></span> : <span className="offline-status"></span>}
            
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

// todo // Функція що включає усі компоненти і експортується для рендеру ;
function App() {
  return (
    <div className="App">
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      >
        {/* <div>chilfren</div> */}
      </Profile>
      <Statistics title={"UPLOAD STATS"} stats={statistics}></Statistics>
      <TransactionHistory items={transactionsData}></TransactionHistory>
      <FriendList friends={friendsData}></FriendList>
    </div>
  );
}

export default App;
