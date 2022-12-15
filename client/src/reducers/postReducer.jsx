export const postReducer = (
  state = { posts: [], loading: false, error: false, uploading: false },
  action
) => {
  switch (action.type) {
    case "POST_START":
      return { ...state, uploading: true, error: false };
    case "POST_SUCCESS":
      // We store the data on local storage
      console.log(action.data);
      return {
        ...state,
        posts: [...state.posts, action.data],
        uploading: false,
        error: false,
      };
    case "POST_FAILURE":
      return { ...state, uploading: false, error: true };
    default:
      return state;
  }
};
