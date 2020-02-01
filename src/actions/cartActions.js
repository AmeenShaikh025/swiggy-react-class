export const INCREMENT_ITEM = "INCREMENT_ITEM";
export const DECREMENT_ITEM = "DECREMENT_ITEM";

export const addItem = name => {
  console.log("addItem", name);
  return {
    type: INCREMENT_ITEM,
    name: name
  };
};

export const removeItem = name => ({
  type: DECREMENT_ITEM,
  name
});
