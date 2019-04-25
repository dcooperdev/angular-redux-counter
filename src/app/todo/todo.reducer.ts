import * as actions from "./todo.actions";
import { Todo } from "./model/todo.model";

const a = new Todo('Matar a Bruno');
const b = new Todo('Conquistar el mundo');
const c = new Todo('Ser la única forma de vida inteligente');

a.completed = true;

const initialState: Todo[] = [ a, b, c ];

export function todoReducer( state = initialState, action: actions.Actions ): Todo[] {
    switch( action.type ) {
        case actions.ADD_TODO:
            const todo = new Todo( action.text )
            return [ ...state, todo ];

        default:
            return state;
    }
}