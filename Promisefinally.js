//Promise finally()

class Connection {
    execute(query) {
        if (query != 'Insert' && query != 'Update' && query != 'Delete') {
            throw new Error(`The ${query} is not supported`);
        }
        console.log(`Execute the ${query}`);
        return this;
    }
    close() {
        console.log('Close the connection')
    }
}

const success = true;

function connect() {
    return new Promise((resolve, reject) => {
        if (success)
            resolve(new Connection());
        else
            reject('Could not open the database connection');
    });
}

let globalConnection;

connect()
    .then((connection) => {
        globalConnection = connection;
        return globalConnection.execute('Insert');
    })
    .then((connection) => {
        globalConnection = connection;
        return connection.execute('Select');
    })
    .catch(console.log)
    .finally(() => {
        if (globalConnection) {
            globalConnection.`close()`;
        }
    });

//The finally() method schedule a function to execute when the promise is settled, either fulfilled or rejected.
//It’s good practice to place the code that cleans up the resources in the finally() method once the promise is settled, regardless of its outcome.
