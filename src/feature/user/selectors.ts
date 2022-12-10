import {ApplicationState} from "../../app/store";
import {IUser} from "./userSlice";

export const getUserByID = (state: ApplicationState, userID: number) => {};
export const getUserByName = (name: string) => {};
export const getLoggedUser = (state: ApplicationState): null|IUser => {
    if (state.user.loggedUser === null) {
        return null;
    }

    return state.user.users[state.user.loggedUser];
};