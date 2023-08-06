export const actionType = {
  SET_USER: "SET_USER",
  SET_FOOD_ITEMS: "SET_FOOD_ITEMS",
  SET_CARD_SHOW: "SET_CARD_SHOW",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionType.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case actionType.SET_FOOD_ITEMS:
      return {
        ...state,
        foodItems: action.foodItems,
      };
      case actionType.SET_CARD_SHOW:
      return {
        ...state,
        cartShow: action.cartShow,
      };

    default:
      return state;
  }
};
export default reducer;
