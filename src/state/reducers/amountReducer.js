const reducer = (state = 0, action) => {
  if (action.type === "deposit") {
    return state + action.payload;
  } else if (action.type === "withdraw") {
    let sup = state - action.payload;
    if (sup < 0) {
      return state;
    } else {
      return sup;
    }
  } else {
    return state;
  }
};
export default reducer;
