export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_USER":
      return [...state, action.payLoad];
    default:
      return state;
  }
};
