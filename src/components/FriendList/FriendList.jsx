import css from "./FriendList.module.css"
import FriendListItem from "../FriendListItem/FriendListItem";
import friends from "../../friends.json"
// console.log(friends);
const FriendList = () => {
  return (
    <ul className={css.list}>
{friends.map((friend) => {
    return <FriendListItem key={friend.id} friend={friend} />
})}
    </ul>
  )
}
export default FriendList;