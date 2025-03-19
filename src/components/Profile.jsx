import css from "./Profile.module.css";
const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.card}>
      <div className={css.user}>
        <img className={css.img} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>"@"{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.stat}>
          <span>Followers</span>
          <span className={css.number}>{stats.followers}</span>
        </li>
        <li className={css.stat}>
          <span>Views</span>
          <span className={css.number}>{stats.views}</span>
        </li>
        <li className={css.stat}>
          <span>Likes</span>
          <span className={css.number}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
