import {ApplicationState} from "../../app/store";
import {IUser} from "./userSlice";


export const getAllUsers = (state: ApplicationState) => Object.values(state.user.users);

export const getUserByID = (state: ApplicationState, userID: number) => {};

export const getUsersByID = (state: ApplicationState, usersID: number[]) =>
    Object.values(state.user.users).filter(user => usersID.includes(user.id));

export const getUserByName = (name: string) => {};

export const getLoggedUser = (state: ApplicationState): null|IUser => {
    if (state.user.loggedUser === null) {
        return null;
    }

    return state.user.users[state.user.loggedUser];
};