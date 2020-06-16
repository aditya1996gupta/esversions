//optional chaining operator

function getUser(id, callback) {
    // get user
    // ...

    let user = {
        id: id,
        username: 'admin'
    };

    // test if the callback exists
    callback ?. (user);function getUser(id, callback) {
    // get user
    // ...

    let user = {
        id: id,
        username: 'admin'
    };

    // test if the callback exists
    callback ?. (user);


    return user;
}
