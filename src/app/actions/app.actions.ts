import { Action } from "@ngrx/store";
import { State } from "../reducers/app.reducer";

export enum CounterActionTypes {
    Save = '[Counter Component] Save',
    Reset = '[Counter Component] Reset',
} 

export class Save implements Action {
    readonly type = CounterActionTypes.Save;
    constructor(public payload: State) {};
}

export class Reset implements Action {
    readonly type = CounterActionTypes.Reset;
}

export type CounterActions = Save | Reset;