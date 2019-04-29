import * as actions from './filter.action';

const initialState: actions.ValidTypes = 'All';

export const filterReducer =
  ( state = initialState, action: actions.actions ): actions.ValidTypes => {

    switch ( action.type ) {
      case actions.SET_FILTER:
        return action.filter;

      default:
        return state;
    }
  };
