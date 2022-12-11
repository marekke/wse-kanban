import {IUserState} from "../feature/user";
import {ListState} from "../feature/list";
import {CardState} from "../feature/card";

export const exampleUserState: IUserState = {
    loggedUser: 1,
    users: {
        1: {
            id: 1,
            name: "Adam"
        },
        2: {
            id: 2,
            name: "Ewa"
        },
    }
};

export const exampleListState: ListState = {
    1: {
        id: 1,
        title: 'Testowa 1',
        cardsOrder: []
    },
    2: {
        id: 2,
        title: 'Testowa 2',
        cardsOrder: []
    }
}

export const exampleCardState: CardState = {
    1: {
        id: 1,
        listID: 1,
        title: "Test 1A test test test",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        users: [1,2],
    },
    2: {
        id: 2,
        listID: 1,
        title: "Test 2B test test test",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        users: [1,2],
    },
    3: {
        id: 3,
        listID: 2,
        title: "Test 3C test test test",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        users: [1],
    }
}