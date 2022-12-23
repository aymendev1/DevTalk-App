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
