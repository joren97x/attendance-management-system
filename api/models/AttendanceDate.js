import db from '../config/Database.js'

export const store = (data, res) => {
    db.query("INSERT INTO attendance_dates SET ?", [data], (err, result) => {
        if(err) {
            res(err, null)
        }
        else {
            res(err, result)
        }
    })
} 

export const show = (res) => {
    db.query("SELECT * FROM attendance_dates ORDER BY id DESC LIMIT 1", (err, result) => {
        if(err) {
            res(err, null)
        }
        else {
            res(err, result)
        }
    })
}
