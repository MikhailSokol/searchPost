import "./App.css";
import { useState, useEffect, useCallback } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import MainComponent from "./components/main/main";
import MessageComponent from "./components/message/Message";
import { useDispatch, useSelector } from "react-redux";
import { sortCurrentPostRedux } from "./store/actionCreator";
import { getAllUswer } from "./store/actionCreator";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [MessageCom, setMessageComponent] = useState(<MessageComponent />);

  const allData = useSelector((store) => store.data.usersData);

  function getNameForParams() {
    return allData?.filter((el) => el.id == href())[0].name;
  }

  const sortOfPosts = useCallback(
    (id, value) => {
      dispatch(sortCurrentPostRedux(id, value));
    },
    [dispatch]
  );
  function href() {
    const address = window.location.href.slice(27);
    const s = address.split(/\//);
    return +s[0].toString();
  }
  const renderPosts = useCallback(
    (name, id) => {
      setMessageComponent(
        <MessageComponent name={name} id={id} sortOfPosts={sortOfPosts} />
      );
    },
    [sortOfPosts]
  );

  useEffect(() => {
    dispatch(getAllUswer());
    const id = href();
    const name = getNameForParams();
    renderPosts(name, id);
    navigate(`user/${id || 1}/posts`);
  }, []);
  return (
    <div className="flex">
      <MainComponent renderPosts={renderPosts} value={sortOfPosts} />

      <Routes>
        <Route path="user/:id/posts" element={MessageCom} />
      </Routes>
    </div>
  );
}

export default App;
