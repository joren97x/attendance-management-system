import db from '../config/Database.js'

export const store = (data, res) => {
    console.log(data)
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


// export const update = (id, data, res) => {
//     db.query("UPDATE users SET firstname = ?, middlename = ?, lastname = ?, address = ?, email = ?, phone = ?, birthday = ?, course = ?, role = ?, password = ? WHERE id = ?", [data, id], (err, result) => {
//         if(err) {
//             res(err, null)
//         }
//         else {
//             res(err, result)
//         }
//     })
// } 

export const update = (id, data, res) => {
    console.log(data)
    db.query("UPDATE users SET ? WHERE id = ?", [data, id], (err, result) => {
        if(err) {
            res(err, null)
        }
        else {
            res(err, result)
        }
    })
} 

export const updatePassword = (id, data, res) => {
    db.query("UPDATE users SET password = ? WHERE id = ?", [data.newPass, id], (err, result) => {
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

export const authenticate = (data, res) => {
    db.query("SELECT * FROM users WHERE email = ? AND password = ?", [data.email, data.password], (err, result) => {
        if(err) {
            res(err, null)
        }
        else {
            res(err, result)
        }
    })
}