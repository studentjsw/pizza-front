export const registerUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_REGISTER_REQUEST":
      return {
        loading: true,
      };
    case "USER_REGISTER_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "USER_REGISTER_FAILED":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

 export const loginUserReducer = (state = {}, action) => {
   switch (action.type) {
     case "LOGIN_USER_REQUEST":
       return {
         loading: true,
       };
     case "LOGIN_USER_SUCCESS":
       return {
         loading: false,
         success: true,
         currentUser: action.payload,
       };
     case "LOGIN_USER_FAILED":
       return {
         loading: false,
         error: action.payload,
       };
     default:
       return state;
   }
};
 
export const getAllUsersReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "GET_USERS_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "GET_USERS_SUCCESS":
      return {
        loading: false,
        users: action.payload,
      };
    case "GET_USERS_FAILED":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};