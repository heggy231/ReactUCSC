export function reduce(
    state: string = '',
    action: any
): string {
    switch(action.type) {
        case "CHANGE_NAME":
            return action.payload;
        default:
            return state;
    }
}