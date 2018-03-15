export function reduce(
  state: number = 21,
  action: any
): number {
  switch (action.type) {
    case "INCREASE_AGE":
      return ++state;
    case "DECREASE_AGE":
      return --state;
    default:
      return state;
  }
}