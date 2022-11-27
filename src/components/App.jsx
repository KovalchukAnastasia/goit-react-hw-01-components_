import Profile from "./Profile/profile";
import user from "./Profile/user.json";
import Statistics from "./Statistics/statistics";
import data from "./Statistics/data.json";
import FriendsList from "./FriendList/friendsList"
import friends from "./FriendList/friends.json"
import Transaction from "./TransactionHistory/transaction"
import transactions from "./TransactionHistory/transactions.json"



export const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontSize: 20,
        color: "#010101",
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="UPLOAD STATS" stats={data} />
      {/* <Statistics stats={data} /> */}
      <FriendsList friends={friends} />
      <Transaction transactions={transactions} />
    </div>
  );
};

export default App;
