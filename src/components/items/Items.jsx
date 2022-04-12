import React from "react";
import styles from "./item.module.css";
import { Link } from "react-router-dom";

function ItemComponent({ user, countPosts, id, renderPosts }) {
  return (
    <>
      <Link to={`user/${id}/posts`} className={styles.link}>
        <div
          className={styles.users}
          onClick={() => {
            renderPosts(user, id);
          }}
        >
          <p className={styles.p}>{user}</p>{" "}
          <div className={styles.circle}>{countPosts}</div>
        </div>
      </Link>
    </>
  );
}

export default React.memo(ItemComponent);
