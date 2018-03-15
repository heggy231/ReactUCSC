export function reduce(
    state: Array<string> = new Array<string>(),
    action: any
): Array<string> {
    switch (action.type) {
        case "UPDATE_LIST":
            const name = action.payload;
            return state.concat(name);
        default: 
            return state;
    }
}