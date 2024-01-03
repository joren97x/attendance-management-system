import { store, index, showAtt, getAttendanceById, destroy, update, attendanceWithStudents } from "../models/Attendance.js"
import {show} from '../models/Student.js'

export const storeAttendance = (req, res) => {
    store(req.body, (err, result) => {
        if(err) {
            res.send(err)
        }
        else {
            res.json(result)
        }
    })
}

// export const showAttendance = (req, res) => {
//     showAtt(req.params.id, (err, result) => {
//         if(err) {
//             res.send(err)
//         }
//         else {
//             res.json(result)
//         }
//     })
// }

export const showAttendance = (req, res) => {
    getAttendanceById(req.params.id, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            console.log(result)
            const promises = result.map(element => {
                return new Promise((resolve, reject) => {
                    show(element.user_id, (err, userResult) => {
                        if (err) {
                            console.log(err);
                            reject(err);
                        } else {
                            resolve([element, userResult[0]]);
                        }
                    });
                });
            });

            Promise.all(promises)
                .then(records => {
                    console.log(records);
                    res.json(records);
                })
                .catch(error => {
                    console.error(error);
                    res.status(500).json({ error: 'Internal Server Error' });
                });
        }
    });
};

export const attendance = (req, res) => {
    attendanceWithStudents(req.params.id, (err, result) => {
        if(err) {
            res.send(err)
        }
        else {
            
            res.json(result)
        }
    })
}

export const allAttendance = (req, res) => {
    index((err, result) => {
        if (err) {
            res.send(err);
        } else {
            const promises = result.map(element => {
                return new Promise((resolve, reject) => {
                    show(element.user_id, (err, userResult) => {
                        if (err) {
                            console.log(err);
                            reject(err);
                        } else {
                            resolve([element, userResult[0]]);
                        }
                    });
                });
            });

            Promise.all(promises)
                .then(records => {
                    console.log(records);
                    res.json(records);
                })
                .catch(error => {
                    console.error(error);
                    res.status(500).json({ error: 'Internal Server Error' });
                });
        }
    });
};


export const destroyAttendance = (req, res) => {
    destroy(req.params.id, (err, result) => {
        if(err) {
            res.send(err)
        }
        else {
            res.json(result)
        }
    })
}

export const updateAttendance = (req, res) => {
    update(req.params.id, req.body, (err, result) => {
        if(err) {
            res.send(err)
        }
        else {
            res.json(result)
        }
    })
}