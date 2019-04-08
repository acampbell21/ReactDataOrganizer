const orders = ( state = [], action ) => {
  switch(action.type) {
    case 'ORDERS':
      return action.orders
    case 'ADD_ORDER':
      return [action.todo, ...state];
    default:
      return state
  }
}

export default orders;