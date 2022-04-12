import React, { useState } from "react";
import styles from "./message.module.css";
import { useParams } from "react-router-dom";
import "./message.module.css";
import { useSelector } from "react-redux";

function MessageComponent(props) {
  const params = useParams();
  const allData = useSelector((store) => store.data);

  const usersPosts = allData?.usersPost?.filter(
    (el) => el.userId === Number(params.id)
  );
  const userName = allData?.usersData?.filter(
    (el) => el.id === Number(params.id)
  )[0].name;

  const [value, setValue] = useState(0);

  const filter = usersPosts?.filter((el) => {
    if (value === 0) {
      return el;
    } else {
      return el.body.toLowerCase().includes(value);
    }
  });

  return (
    <div className={styles.parent}>
      <div className={styles.parentBtn}>
        <button
          value={"new"}
          className={styles.btn}
          onClick={(e) => props.sortOfPosts(props.id, e.target.value)}
        >
          Последние посты
        </button>
        <button
          value={"old"}
          className={styles.btn}
          onClick={(e) => props.sortOfPosts(props.id, e.target.value)}
        >
          Архивные посты
        </button>
        <button
          value={"data"}
          className={styles.btn}
          onClick={(e) => props.sortOfPosts(props.id, e.target.value)}
        >
          Сортировка по дате
        </button>
        <input
          className={styles.input}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Поиск по тексту"
        />
      </div>
      <div className={styles.message}>
        {filter?.map((el) => {
          return (
            <div key={el.id}>
              <div className={styles.userData}>
                <div className={styles.userName}>Автор поста: {userName} </div>
                <div className={styles.data}>
                  Дата публикации: {el.data.slice(0, 24)}
                </div>
              </div>
              <div className={styles.posts}>
                <div className={styles.title}>{el.title}</div>
                <div className={styles.body}>{el.body}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default React.memo(MessageComponent);
