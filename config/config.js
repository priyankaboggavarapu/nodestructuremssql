var port = 3010;

module.exports = {
    port: port,
    secret: "STEPV",
    db: "mongodb://localhost:27017/DEMO"
}


//For SQL DB configuration
// module.exports.sqlConfig = {
//     port: port,
//     secret: "STEPV",
//     db: {
//         server: "localhost\\SQL2K14",
//         database: "SampleDb",
//         user: "sa",
//         password: "sql2014",
//         port: 1433,
//         options: {encrypt: true}
//     }
// }

