export function apiDogs(){
    let example = {
        dogs: [
            {name: 'Husky'},
            {name: 'Dachound'}
        ]
    };
    return JSON.stringify(example);
}