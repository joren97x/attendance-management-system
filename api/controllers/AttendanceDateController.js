import { store, show } from "../models/AttendanceDate.js"

export const storeAttendanceDate = (req, res) => {
    store(req.body, (err, result) => {
        if(err) {
            res.send(err)
        }
        else {
            res.json(result)
        }
    })
}

export const getAttendanceDate = (req, res) => {
    show((err, result) => {
    if(err) {
        res.send(err)
    }        
    else {
        res.json(result)
    }
    })
}
