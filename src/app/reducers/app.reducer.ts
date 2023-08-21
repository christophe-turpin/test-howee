import { CounterActionTypes, CounterActions } from "../actions/app.actions";

export type State = {
    bebe: number,
    enfant: number,
    ado: number,
    adulte: number
}


export const initialState: State = {
    bebe: 0,
    enfant: 0,
    ado: 0,
    adulte: 0,
}

export function counterReducer(state: State = initialState, action: CounterActions) {
    switch (action.type) {
        case CounterActionTypes.Save:
            return action.payload;
        case CounterActionTypes.Reset:
            return {
                bebe: 0,
                enfant: 0,
                ado: 0,
                adulte: 0,
            };
        default:
            return state;
    }
}