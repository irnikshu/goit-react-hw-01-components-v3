import PropTypes from 'prop-types';

import styles from './friendList.module.css';

import FriendListItem from './FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  const elements = friends.map(item => (
    <FriendListItem
      avatar={item.avatar}
      name={item.name}
      isOnline={item.isOnline}
      key={item.id}
    />
  ));
  return (
    <div className={styles.containerFriends}>
      <ul className={styles.listFriends}>{elements}</ul>
    </div>
  );
};

FriendList.defaultProps = {
  items: [],
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
