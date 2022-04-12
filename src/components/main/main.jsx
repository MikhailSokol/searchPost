import React, { useState } from "react";
import { useSelector } from "react-redux";
import ItemComponent from "../items/Items";
import styles from "./main.module.css";

function MainComponent({ renderPosts, value }) {
  const allData = useSelector((store) => store.data);
  let allUsers = allData.usersData;
  const allPosts = allData.usersPost;

  function getUsersCountPosts(id) {
    return allPosts.filter((el) => id === el.userId).length;
  }

  const [findUser, setFindUser] = useState("");

  const filter = allUsers?.filter((el) => {
    return el.name.toLowerCase().includes(findUser);
  });

  return (
    <>
      <div className={styles.parent}>
        <input
          className={styles.inputUser}
          onChange={(e) => setFindUser(e.target.value)}
          placeholder="Поиск по пользователям"
        />

        <div className={styles.btn}>
          {filter?.map((el) => {
            return (
              <ItemComponent
                key={el.id}
                user={el.name}
                id={el.id}
                renderPosts={renderPosts}
                value={value}
                countPosts={getUsersCountPosts(el.id)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default React.memo(MainComponent);
