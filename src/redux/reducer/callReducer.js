let initialState = {
  list: [],
};

const callReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case "CALL":
      console.log(payload);
      console.log(action);
      console.log(state);
      return {
        ...state,
        list: payload,
      };
    default:
      return { ...state };
  }
};

export default callReducer;
