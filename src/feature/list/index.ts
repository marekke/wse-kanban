import * as listSelectors from './selectors';
import {create, update} from './listSlice';

export const listActions = {
    create, update
}

export {
    default as listReducer,
    type List,
    type ListState,
} from './listSlice';

export {default as ListCreate} from './components/ListCreate';
export {default as ListUpdate} from './components/ListUpdate';
export {default as ListView} from './components/ListView';

export {listSelectors};