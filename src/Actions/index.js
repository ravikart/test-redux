import _ from "lodash";
import jsonPlaceHolder from "../Axios/jsonPlaceHolder";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  const getUserData = getState().posts;
  const uniqUserIds = _.uniq(_.map(getUserData, "userId"));
  uniqUserIds.forEach(id => {
    dispatch(fetchUser(id));
  });
};

export const fetchPosts = () => {
  return async dispatch => {
    const response = await jsonPlaceHolder.get("/posts");
    dispatch({
      type: "FETCH_POST",
      payLoad: response.data
    });
  };
};

/* export const fetchUser = id => dispatch => {
  _fetchUser(id, dispatch);
};

const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceHolder.get(`/users/${id}`);
  dispatch({
    type: "FETCH_USER",
    payLoad: response.data
  });
}); */
export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceHolder.get(`/users/${id}`);
  dispatch({
    type: "FETCH_USER",
    payLoad: response.data
  });
};
