import PropTypes from "prop-types";

import styles from "./friendList.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <li className={styles.itemFriends}>
            <span className={isOnline ? styles.online : styles.offline}/>
            <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={styles.name}>{name}</p>
        </li>

    )
        
};
export const FriendList = ({ friends }) => { 
    const elements = friends.map(item => <FriendListItem
        avatar={item.avatar}
        name={item.name}
        isOnline={item.isOnline}
        key={item.id} />)
    return (
        <div className={styles.containerFriends}> 
            <ul className={styles.listFriends}>
                {elements}
            </ul>
        </div>
    )
}



FriendList.defaultProps = {
    items: []
}
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
FriendList.propTypes = {
    // avatar: PropTypes.string.isRequired,
    // name: PropTypes.string.isRequired,
    // isOnline: PropTypes.bool.isRequired,
    friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
}
