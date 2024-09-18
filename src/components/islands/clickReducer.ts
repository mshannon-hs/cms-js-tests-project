export default function todosReducer(state = 0, action: { type: string }) {
  switch (action.type) {
    case 'click':
      return state + 1;
    default:
      return state;
  }
}
