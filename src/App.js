import './App.css';
import user from './user.json/user.json';
import statistics from './statistics-data.json/data.json';
import friendsData from './friends.json/friends.json';
import transactionsData from './transactions.json/transactions.json';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { TransactionHistory } from 'components/Transactions/Transactions';
import { FriendList } from 'components/Friends/Friends';

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
      <Statistics title={'UPLOAD STATS'} stats={statistics}></Statistics>
      <TransactionHistory items={transactionsData}></TransactionHistory>
      <FriendList friends={friendsData}></FriendList>
    </div>
  );
}

export default App;
