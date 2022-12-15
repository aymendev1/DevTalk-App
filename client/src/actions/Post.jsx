import * as PostAPI from "../api/PostRequest";
export const uploadPost = (newPost) => async (dispatch) => {
  try {
    dispatch({ type: "POST_START" });
    const post = await PostAPI.createPost(newPost);
    dispatch({ type: "POST_SUCCESS", data: post.data });
  } catch (error) {
    dispatch({ type: "POST_FAILED" });
    console.log(error);
  }
};

export const getTimelinePosts = (userID) => async (dispatch) => {
  dispatch({ type: "GET_TIMELINE_POST_START " });
  try {
    const { data } = await PostAPI.getTimelinePosts(userID);
    dispatch({ type: "GET_TIMELINE_POST_SUCCESS ", data: data });
  } catch (error) {
    dispatch({ type: "GET_TIMELINE_POST_FAIL" });
    console.log(error);
  }
};
