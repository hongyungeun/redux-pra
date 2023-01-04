function call() {
  return async (dispatch) => {
    try {
      const callApi = await fetch("https://jsonplaceholder.typicode.com/users");
      const resCall = await callApi.json();
      console.log(resCall);
      dispatch({
        type: "CALL",
        payload: resCall,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export const fetchAction = {
  call,
};
