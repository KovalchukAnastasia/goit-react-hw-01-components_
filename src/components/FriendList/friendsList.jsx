import PropTypes from "prop-types"
import { List } from "./friends.styled";
import { FriendsItem } from "./item"

const FriendsList = ({friends}) => {
    return (
    <List>
      {friends.map(({ avatar, name, id, isOnline }) => (
        <FriendsItem
          avatar={avatar}
          name={name}
          key={id}
          isOnline={isOnline}
        />
      ))}
    </List>
    );
};

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string,
            name: PropTypes.string,
            isOnline: PropTypes.bool,
            id: PropTypes.number,
        })
    ),

};

export default FriendsList;

