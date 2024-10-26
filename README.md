## Description

This file sets up an Express server on port 1998. It imports routes for handling product and category CRUD operations and associates them with endpoints (/product, /category). Finally, it starts the server and logs a message confirming it's listening on the specified port.

## Quick Start

\*\*\* Make sure you are using version 21 or up of nodejs

\*\* Make sure you are connection with the database in pool file

//pg admin
module.exports = new pg.Pool({
user: "postgres", // Your database user >>> you can use postgres
password: "Aref@1998", // Your database password
host: "localhost", // Your database host
database: "abuodehstore", // Your database name
port: 5432, // Your database port
});

\*\* There is a copy of the database in the email

```in vs code terminal write
1- yarn
2- yarn dev

name : Aref Abdallah
phone : 0775645242

```
