import * as PostAPI from "../api/PostRequest";
export const getTimelinePosts = (userID) => async (dispatch) => {
  try {
    dispatch({ type: "UPLOAD_START" });
    const { data } = await PostAPI.getTimelinePosts(userID);
    console.log(data);
    return dispatch({ type: "UPLOAD_SUCCESS", data: data });
  } catch (error) {
    dispatch({ type: "UPLOAD_FAIL" });
    console.log(error);
  }
};
