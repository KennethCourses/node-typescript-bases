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

function getUserById(id, callback) {
    const user = users.find(user => { return user.id === id })

    if (!user) {
        return callback(`User with id ${id} not found`)
    }

    return callback(null, user)
}

module.exports = {
    getUserById
}