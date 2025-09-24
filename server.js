const http = require("http");
const mongodb = require("mongodb");

let db;
let connectionString = "mongodb+srv://shoxrux17:17052003Sh@cluster0.4bbdk3d.mongodb.net/Reja?retryWrites=true&w=majority&appName=Cluster0"

mongodb.connect(
    connectionString,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (error, client) => {
        if (error) {
            console.log('Error on database connection:', error);
        } else {
            const PORT = 3000
            console.log('Mongodb Database:connected successfully');
            module.exports = client;

            const app = require("./app");
            const server = http.createServer(app);
            server.listen(PORT, function () {
                console.log(`Server is running successfully on port:  ${PORT}, http://localhost:${PORT}`);
            });
        }
    })