const { getUserById } = require("./js-foundation/04-arrow");

getUserById(1, (err, user) => {
    if (err) {
        return console.log(err)
    }

    console.log(user)
});

getUserById(4, (err, user) => {
    if (err) {
        return console.log(err)
    }

    console.log(user)
});