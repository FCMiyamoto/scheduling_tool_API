import mysql from 'mysql';
import dotenv from 'dotenv';
import util from 'util';
import { IDBConnection } from '../interface/database/IDBConnection';

export class MysqlConnection extends IDBConnection {
    private pool: any;

    constructor() {
        super();
        dotenv.config();
        this.pool = mysql.createPool({
            connectionLimit: 1,
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            timezone: process.env.DB_TIMEZONE
        })

        this.pool.getConnection((error: any, connection: any) => {
            if (error) {
                if (error.code === 'PROTOCOL_CONNECTION_LOST') {
                    console.error('Database connection was closed. ');
                }
                if (error.code === 'ER_CON_COUNT_ERROR') {
                    console.error('Database has too many connections. ');
                }
                if (error.code === 'ECONNREFUSED') {
                    console.error('Database connection was refused. ');
                }
            }
            if (connection) connection.release();
            return
        })

        this.pool.query = util.promisify(this.pool.query);

        //pool event
        this.pool.on('connection', (connection: any) => {
            console.log('mysql conenction %d create', connection.threadId);
        })
        this.pool.on('release', (connection: any) => {
            console.log('Connection %d released', connection.threadId)
        })
    }

    execute(query: string, params: any) {
        if (params !== null) {
            return this.pool.query(query, params);
        } else {
            return this.pool.query(query);
        }
    }
}