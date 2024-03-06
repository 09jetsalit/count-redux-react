import { Increment, Decrement, Set_count } from "../action/action";

const initialState = {
  count: 0,
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case Increment:
      return {
        ...state,
        count: state.count + 1,
      };
    case Decrement:
      return {
        ...state,
        count: state.count > 0 ? state.count - 1 : (state.count = 0),
      };
    case Set_count:
      if (action.payload >= 0) {
        return {
          ...state,
          count: action.payload,
        };
      } else {
        return state;
      }

    default:
      return state;
  }
};

export default counter;
