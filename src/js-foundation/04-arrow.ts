interface User {
    id: number;
    name: string;
}

const users = [
    {
        id: 1,
        name: "John"
    },
    {
        id: 2,
        name: "Jane"
    },
    {
        id: 3,
        name: "Jim"
    }
]

export const getUserById = (id: number, callback: (err?: string, user?: User) => void) => {
    const user = users.find(user => user.id === id)

    if (!user) {
        return callback(`User with id ${id} not found`)
    }

    return callback(undefined, user)
}