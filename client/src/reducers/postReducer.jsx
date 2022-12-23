export const postReducer = (
  state = { posts: [], loading: false, error: false, uploading: false },
  action
) => {
  switch (action.type) {
    case "POST_START":
      return { ...state, uploading: true, error: false };
    case "POST_SUCCESS":
      // We store the data on local storage
      return {
        ...state,
        posts: [action.data, ...state.posts],
        uploading: false,
        error: false,
      };
    case "POST_FAILURE":
      return { ...state, uploading: false, error: true };
    // belongs to Posts.jsx
    case "UPLOAD_START":
      return { ...state, loading: true, error: false };
    case "UPLOAD_SUCCESS":
      return {
        ...state,
        posts: action.data,
        loading: false,
        error: false,
      };
    case "UPLOAD_FAIL":
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};
