export const Decrement = "Decrement";
export const Increment = "Increment";
export const Set_count = "Set_count";

export const increment = () => {
  return {
    type: Increment,
  };
};

export const decrement = () => {
  return {
    type: Decrement,
  };
};

export const setCount = (count) => {
  return {
    type: Set_count,
    payload: count,
  };
};
