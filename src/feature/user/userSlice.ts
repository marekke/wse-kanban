import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {generateIDForEntity} from "../../utils/IDGeneratator";
import {exampleUserState} from "../../app/exampleData";

export interface IUser {
    id: number,
    name: string
}

export interface INewUser {
    name: string
}

export interface IUserState {
    loggedUser: null | number,
    users: {
        [key: number]: IUser
    }
}

const initialState: IUserState = {
    loggedUser: null,
    users: {}
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        created(state, action: PayloadAction<INewUser>) {
            const newID = generateIDForEntity(state, 'users');
            state.users[newID] = {
                id: newID,
                ...action.payload
            }
        },
        createAndLogin(state, action: PayloadAction<INewUser>) {
            const existsUser = Object.values(state.users).find((user) => user.name === action.payload.name);
            let userID;

            if (existsUser === undefined) {
                userID = generateIDForEntity(state, 'users');
                state.users[userID] = {
                    id: userID,
                    ...action.payload
                }
            } else {
                userID = existsUser.id;
            }

            state.loggedUser = userID;
        },
        logout(state) {
            state.loggedUser = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase("app/load_example_data", (state: IUserState) => {
                return exampleUserState;
            })
            .addCase("app/clear_all_data", (state: IUserState) => {
                return initialState;
            })
    }
})

export const createNewUser = (name: string) => {
    return userSlice.actions.created({name});
}

export const login = (name: string) => {
    return userSlice.actions.createAndLogin({name});
}

export const {created, logout} = userSlice.actions;
export default userSlice.reducer;