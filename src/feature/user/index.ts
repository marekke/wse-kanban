import {created, createNewUser, login, logout} from "./userSlice";
import * as userSelectors from "./selectors";

export  const userActions = {
    created, createNewUser, login, logout
}

export {
    default as userReducer,
    type IUserState
} from "./userSlice";

export {userSelectors};