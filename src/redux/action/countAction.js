function countUp() {
  return (dispatch) => {
    dispatch({
      type: "COUNT_PLUS",
      payload: 1,
    });
  };
}
function countDown(a) {
  return (dispatch) => {
    dispatch({
      type: "COUNT_MINUS",
      payload: a,
    });
  };
}

export const countAction = {
  countUp,
  countDown,
};
