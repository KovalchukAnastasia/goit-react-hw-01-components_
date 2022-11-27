import PropTypes from 'prop-types';
import {
  Profile,
  Description,
  Avatar,
  Name,
  Info,
  Stats,
  Label,
  Quantity,
} from './profile.styled';

const UserProfile = ({ avatar, username, tag, location, stats }) => {
  return (
    <Profile>
      <Description>
        <Avatar src={avatar} alt={username} width="150" />
        <Name>{username}</Name>
        <Info>{tag}</Info>
        <Info>{location}</Info>
      </Description>

      <Stats>
        <li>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </li>
        <li>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </li>
        <li>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </li>
      </Stats>
    </Profile>
  );
};

UserProfile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default UserProfile;