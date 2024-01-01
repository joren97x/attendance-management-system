import db from '../config/Database.js'

export const store = (data, res) => {
    db.query("INSERT INTO users SET ?", [data], (err, result) => {
        if(err) {
            res(err, null)
        }
        else {
            res(err, result)
        }
    })
} 

export const show = (id, res) => {
    db.query("SELECT * FROM users WHERE id = ?", [id], (err, result) => {
        if(err) {
            res(err, null)
        }
        else {
            res(err, result)
        }
    })
} 

export const index = (res) => {
    db.query("SELECT * FROM users WHERE role = ?", ['student'], (err, result) => {
        if(err) {
            res(err, null)
        }
        else {
            res(err, result)
        }
    })
} 

export const update = (id, data, res) => {
    db.query("UPDATE users SET firstname = ?, middlename = ?, lastname = ?, address = ?, email = ?, phone = ?, birthday = ?, course = ?, role = ? WHERE id = ?", [data, id], (err, result) => {
        if(err) {
            res(err, null)
        }
        else {
            res(err, result)
        }
    })
} 

export const updatePassword = (id, data, res) => {
    db.query("UPDATE users SET password = ? WHERE id = ?", [data, id], (err, result) => {
        if(err) {
            res(err, null)
        }
        else {
            res(err, result)
        }
    })
}

export const destroy = (id, res) => {
    db.query("DELETE FROM users WHERE id = ?", [id], (err, result) => {
        if(err) {
            res(err, null)
        }
        else {
            res(err, result)
        }
    })
}