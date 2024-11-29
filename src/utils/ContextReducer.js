import { createContext, useMemo, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: action.id,
          qty: action.qty,
          tempId: action.tempId,
          price: action.price,
          name: action.name,
          img: action.img,
          size: action.priceOptions,
        },
      ];

    case "UPDATE":
      let arr = [...state];
      arr.find((food, index) => {
        if (food.tempId === action.tempId) {
          arr[index] = {
            ...food,
            qty: parseInt(action.qty) + parseInt(food.qty),
            price: action.price + food.price,
          };
        }
      });
      return arr;
    case "REMOVE":
      let removeArr = [...state];
      removeArr.splice(action.index, 1);
      return removeArr;

    case "INCREMENT":
      let incrementArr = [...state];
      incrementArr.find((food, index) => {
        if (food.tempId === action.tempId) {
          incrementArr[index] = {
            ...food,
            qty: parseInt(food.qty) + 1,
            price: food.price + action.unitPrice,
          };
        }
      });
      // console.log(food.price);
      return incrementArr;

    case "DECREMENT":
      let decrementArr = [...state];
      decrementArr.find((food, index) => {
        if (food.tempId === action.tempId) {
          decrementArr[index] = {
            ...food,
            qty: parseInt(food.qty) - 1,
            price: food.price - action.unitPrice,
          };
        }
      });
      // console.log(food.price);
      return decrementArr;

    case "DROP":
      let emptyArr = [];
      return emptyArr;

    default:
      console.log("action.type");
  }
};

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);
  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
