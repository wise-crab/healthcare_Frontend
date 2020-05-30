const initialState = {
  role: "admin",
  name: "user name",
  type: "Loading",
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return { ...action.payload, role: action.payload.rol };
    default:
      return state;
  }
};
