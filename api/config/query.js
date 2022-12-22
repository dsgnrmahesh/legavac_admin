var dbConn = require("./db.config");
query = async (sql, values) => {
    return new Promise((resolve, reject) => {
        const callback = (error, result) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(result);
        }
        // execute will internally call prepare and query
        dbConn.query(sql, values, callback);
    }).catch(err => {
        return err;
    });
}
module.exports=query;