export enum CounterActionType {
  INCREMENT,
  DECREMENT
}

interface CounterAction {
  type: CounterActionType;
}

interface CounterState {
  quantity: number;
}

export const reducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case CounterActionType.INCREMENT:
      return { quantity: state.quantity + 1 };
      case CounterActionType.DECREMENT:
          if (state.quantity > 1) {
              return { quantity: state.quantity - 1 };
          }
      return {quantity: 1}
    default:
      throw new Error("Unsupported action type");
  }
};
