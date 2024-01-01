import db from '../config/Database.js'

export const store = (data, res) => {
    db.query("INSERT INTO attendance SET ?", [data], (err, result) => {
        if(err) {
            res(err, null)
        }
        else {
            res(err, result)
        }
    })
} 

export const show = (id, res) => {
    db.query("SELECT * FROM attendance WHERE id = ?", [id], (err, result) => {
        if(err) {
            res(err, null)
        }
        else {
            res(err, result)
        }
    })
} 

export const index = (res) => {
    db.query("SELECT * FROM attendance", (err, result) => {
        if(err) {
            res(err, null)
        }
        else {
            res(err, result)
        }
    })
} 

export const update = (id, data, res) => {
    db.query("UPDATE attendance SET status = ? WHERE id = ?", [data, id], (err, result) => {
        if(err) {
            res(err, null)
        }
        else {
            res(err, result)
        }
    })
}

export const destroy = (id, res) => {
    db.query("DELETE * FROM attendance WHERE id = ?", [id], (err, result) => {
        if(err) {
            res(err, null)
        }
        else {
            res(err, result)
        }
    })
}