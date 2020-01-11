require('dotenv').config();


module.exports = {

    connections: {

        mysql: {
            "development": {
                "username": process.env.MYSQL_DEV_DB_USERNAME,
                "password": process.env.MYSQL_DEV_DB_PASSWORD,
                "database": process.env.MYSQL_DEV_DB_DATABASE,
                "host":     process.env.MYSQL_DEV_DB_HOST,
                "dialect":  process.env.MYSQL_DEV_DB_CONNECTION,
                "logging": false //remove or comment out this line to enable logging
              },
              
              "production": {
                "username": process.env.MYSQL_PROD_DB_USERNAME,
                "password": process.env.MYSQL_PROD_DB_PASSWORD,
                "database": process.env.MYSQL_PROD_DB_DATABASE,
                "host":     process.env.MYSQL_PROD_DB_HOST,
                "dialect":  process.env.MYSQL_PROD_DB_CONNECTION,
                "logging": false //remove or comment out this line to enable logging
              }
        },

        postgres: {
            "development": {
                "username": process.env.PG_DEV_DB_USERNAME,
                "password": process.env.PG_DEV_DB_PASSWORD,
                "database": process.env.PG_DEV_DB_DATABASE,
                "host":     process.env.PG_DEV_DB_HOST,
                "dialect":  process.env.PG_DEV_DB_CONNECTION,
                "logging": false, //remove or comment out this line to enable logging
            },
          
            "production": {
                "username": process.env.PG_PROD_DB_USERNAME,
                "password": process.env.PG_PROD_DB_PASSWORD,
                "database": process.env.PG_PROD_DB_DATABASE,
                "host":     process.env.PG_PROD_DB_HOST,
                "dialect":  process.env.PG_PROD_DB_CONNECTION,
                "logging": false //remove or comment out this line to enable logging
            } 
        },

        sqlite: {
            "development": {
                "dialect":  "sqlite",
                "storage": "./database.sqlite3"
            },

            "test": {
                "dialect": "sqlite",
                "storage": ":memory"
            },

            "production": {
                "dialect": "sqlite",
                "storage": "./database.sqlite3"
              }
        },
    }

    

};