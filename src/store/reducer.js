import actionTypes from "./types";

const initState = {
  data: {},
};

export const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SEND_ALL_USER_REDUX:
      const userPost = action.payload.users.usersPostsData;
      return {
        ...state,
        data: {
          usersData: action.payload.users.usersData.sort((a, b) =>
            a["name"].localeCompare(b["name"])
          ),
          usersPost: [
            ...userPost.map((el, index) => {
              const event = new Date(
                1993 + Math.random() * 20,
                Math.random() * 12,
                28 - index,
                index,
                39 - index,
                7
              );
              return { ...el, data: (el.data = event.toString()) };
            }),
          ],
        },
      };
    case actionTypes.SORT_POSTS:
      if (action.payload.value === "new") {
        return {
          ...state,
          data: {
            ...state.data,
            usersPost: [...state.data.usersPost.sort((a, b) => b.id - a.id)],
          },
        };
      } else if (action.payload.value === "old") {
        return {
          ...state,
          data: {
            ...state.data,
            usersPost: [...state.data.usersPost.sort((a, b) => a.id - b.id)],
          },
        };
      } else if (action.payload.value === "data") {
        return {
          ...state,
          data: {
            ...state.data,
            usersPost: [
              ...state.data.usersPost.sort((a, b) => {
                return new Date(b.data) - new Date(a.data);
              }),
            ],
          },
        };
      } else return state;

    default:
      return state;
  }
};
