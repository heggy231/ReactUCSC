export function update(
    name: string
): any {
    return {
        type: "UPDATE_LIST",
        payload: name
    };
}