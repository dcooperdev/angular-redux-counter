import { Action } from '@ngrx/store';

export const SET_FILTER = '[FILTER] Set filter';

export type ValidTypes = 'All' | 'Active' | 'Completed';

export class SetFilterAction implements Action {

  readonly type = SET_FILTER;

  constructor( public filter: ValidTypes ) {}

}
export type actions = SetFilterAction;
