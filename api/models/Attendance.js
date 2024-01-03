import db from '../config/Database.js'
import {allStudent} from '../controllers/StudentController.js'

export const store = (data, res) => {
    let attendanceExists = false
    let currentAttendance
    db.query("SELECT * FROM attendance WHERE attendance_date_id = ? AND user_id = ?", [data.attendance_date_id, data.user_id], (err, result) => {
        if(result.length > 0) {
            attendanceExists = true
            currentAttendance = result[0]
        }
        if(!err) {
            if(result.length > 0) {
                currentAttendance = result[0]
                db.query("UPDATE attendance SET status = ? WHERE id = ?", [data.status, currentAttendance.id], (err, result) => {
                    if(err) {
                        res(err, null)
                    }
                    else {
                        res(err, result)
                    }
                })
            }
            else {
                db.query("INSERT INTO attendance SET ?", [data], (err, result) => {
                    if(err) {
                        res(err, null)
                    }
                    else {
                        res(err, result)
                    }
                })
            }
        }

    })
    // console.log( 'DOES ATTENDANCE EXITS?' + attendanceExists)
    // if(attendanceExists) {
    //     console.log("JUST UPDATE")
    //     db.query("UPDATE attendance SET status = ? WHERE id = ?", [status, currentAttendance.id], (err, result) => {
    //         if(err) {
    //             res(err, null)
    //         }
    //         else {
    //             res(err, result)
    //         }
    //     })
    // }
    // else {
    //     console.log("JUST INSERT")
    //     db.query("INSERT INTO attendance SET ?", [data], (err, result) => {
    //         if(err) {
    //             res(err, null)
    //         }
    //         else {
    //             res(err, result)
    //         }
    //     })
    // }
} 

export const attendanceWithStudents = (id, res) => {
    // Assuming you have a database connection named 'db'
    db.query(
        'SELECT users.*, att.* FROM users AS users LEFT JOIN attendance AS att ON users.id = att.user_id WHERE att.attendance_date_id = ?',
        [id],
        (err, result) => {
            if (err) {
                console.error('Error fetching student attendance:', err);
                res(err, null);
            } else {
                const studentsWithAttendance = result;
                res(null, result);
            }
        }
    );
};




export const showAtt = (id, res) => {
    db.query("SELECT * FROM attendance WHERE attendance_date_id = ?", [id], (err, result) => {
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

export const getAttendanceById = (id, res) => {
    db.query("SELECT * FROM attendance WHERE user_id = ?", [id], (err, result) => {
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
    db.query("DELETE FROM attendance WHERE id = ?", [id], (err, result) => {
        if(err) {
            res(err, null)
        }
        else {
            res(err, result)
        }
    })
}