export function change(
    name: string
): any {
    return {
        type: "CHANGE_NAME",
        payload: name
    };
}