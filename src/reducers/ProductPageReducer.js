import { ACTIONS } from '../actions/actions';

export const initialState = {
  isLoading: false,
  products: [],
  isError: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_START:
      return { ...state, isLoading: true };
    case ACTIONS.FETCH_START:
      return { ...state, products: action.payload, isLoading: false };
    case ACTIONS.FETCH_START:
      return { ...state, isError: action.payload, isLoading: false };
    case 'default':
      state;
  }
};
