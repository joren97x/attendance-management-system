import mysql from 'mysql2'

const db = mysql.createConnection({
    host: 'localhost',
    password: '',
    user: 'root',
    database: 'attendance'
})

export default db