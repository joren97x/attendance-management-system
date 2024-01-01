import { store, index, show, destroy, update } from "../models/Attendance.js"

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

export const showAttendance = (req, res) => {
    show(req.params.id, (err, result) => {
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
        if(err) {
            res.send(err)
        }
        else {
            res.json(result)
        }
    })
}

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