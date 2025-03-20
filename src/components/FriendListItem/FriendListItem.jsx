import clsx from "clsx";
import css from "./FriendListItem.module.css"

const FriendListItem = ({friend}) => {
  return (
 <li className={css.friend}>
  <img src={friend.avatar} alt="Avatar" width="48" />
  <p className={css.name}>{friend.name}</p>
  <p className={clsx(css.status, friend.isOnline ? css.green : css.red)}>{friend.isOnline ? "Online" : "Offline" }</p>
</li> 
  )
}
export default FriendListItem;


