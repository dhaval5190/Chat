require('dotenv').config();
const mysql = require('mysql');
const _ = require('lodash');

const DB = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "chatapp"
});

DB.getConnection(function (err, connection) {
    if (err != null && (err.code === 'ECONNREFUSED' || err.code === 'ETIMEDOUT')) {
        console.log('sql not connected...');
        return false;
    } else {
        console.log('sql connected...');

    }
});

const sqlhelper = {};

sqlhelper.select = async (query, data_array = [], callback) => {
    return new Promise(resolve => {
        DB.getConnection(function (err, con) {
            let sql_data = con.query(query, data_array, (err, res) => {
                con.destroy();
                if (err) {
                    return resolve(callback(err, ""));
                } else {
                    return resolve(callback("", res));
                }
            });
            // console.log("=======================");
            // console.log(sql_data.sql);
        });
    });
}

sqlhelper.CountAll = async (table_name, where, data_array = [], callback) => {
    return new Promise(resolve => {
        DB.getConnection(function (err, con) {
            let sql_data = con.query(`Select count(*) as total from ${table_name} where 1 ${where}`, data_array, (err, res) => {
                con.destroy();
                if (err) {
                    return resolve(callback(err, ""));
                } else {
                    return resolve(callback("", res));
                }
            });
            // console.log("=======================");
            // console.log(sql_data.sql);
        });
    });
}
sqlhelper.insert = async (table_name, insert_data = {}, callback) => {
    return new Promise(resolve => {
        DB.getConnection(function (err, con) {
            let sql_data = con.query('INSERT INTO ' + table_name + ' SET ?', insert_data, (err, res) => {
                con.destroy();
                if (err) {
                    return resolve(callback(err, ""));
                } else {
                    return resolve(callback("", res));
                }
            });
            // console.log("=======================");
            // console.log(sql_data.sql);
        });
    });
}
sqlhelper.batchinsert = async (table_name, set_data = {}, insert_data = [], callback) => {
    return new Promise(resolve => {
        DB.getConnection(function (err, con) {
            let sql_data = con.query('INSERT INTO ' + table_name + ' (' + set_data + ') values ?', [insert_data], (err, res) => {
                con.destroy();
                if (err) {
                    return resolve(callback(err, ""));
                } else {
                    return resolve(callback("", res));
                }
            });
            // console.log("=======================");
            // console.log(sql_data.sql);
        });
    });
}
sqlhelper.update = async (table_name, update_data = {}, where = {}, like = "", callback) => {
    let update_key = Object.keys(update_data);
    update_key = update_key.join('=?, ');
    update_key = (update_key != '' ? update_key + '=?' : '');

    let where_key = Object.keys(where);
    where_key = where_key.join('=? AND ');
    where_key = (where_key != '' ? ' AND ' + where_key + '=? ' : '');

    update_data = Object.values(update_data);
    _.each(where, (wVal, wKey) => {
        update_data.push(wVal);
    });
    // console.log(update_data)
    return new Promise(resolve => {
        DB.getConnection(function (err, con) {
            let sql_data = DB.query('UPDATE ' + table_name + ' SET ' + update_key + ' WHERE 1 ' + like + where_key, update_data, (err, res) => {
                con.destroy();
                if (err) {
                    console.log(err)
                    return resolve(callback(err, ""));
                } else {
                    // console.log("=======================");
                    // console.log(sql_data.sql);
                    return resolve(callback("", res));
                }
            });
        });
    });
}
sqlhelper.delete = async (table_name, IDName, where_array = {}, callback) => {
    return new Promise(resolve => {
        DB.getConnection(function (err, con) {
            let sql_data = con.query('DELETE from ' + table_name + ' where ' + IDName + ' = ?', where_array, (err, res) => {
                con.destroy();
                if (err) {
                    return resolve(callback(err, ""));
                } else {
                    return resolve(callback("", res));
                }
            });
            // console.log("=======================");
            // console.log(sql_data.sql);
        });
    });
}
module.exports = sqlhelper;