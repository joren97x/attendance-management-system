import { store, destroy, index, show, updatePassword, update, authenticate } from "../models/Student.js"

export const storeStudent = (req, res) => {
    store(req.body, (err, result) => {
        if(err) {
            res.send(err)
        }
        else {
            res.json(result)
        }
    })
}

export const updateStudent = (req, res) => {
    update(req.params.id, req.body, (err, result) => {
        if(err) {
            res.send(err)
        }
        else {
            res.json(result)
        }
    })
}

export const updatePass = (req, res) => {

    if(req.body.newPass !== req.body.confirmNewPass) {
        res.send('error')
    }
    else {
        updatePassword(req.params.id, req.body, (err, result) => {
            if(err) {
                res.send(err)
            }
            else {
                res.json(result)
            }
        }) 
    }

      
}

export const showStudent = (req, res) => {
    show(req.params.id, (err, result) => {
        if(err) {
            res.send(err)
        }
        else {
            res.json(result)
        }
    })
}

export const allStudent = (req, res) => {
    index((err, result) => {
        if(err) {
            res.send(err)
        }
        else {
            res.json(result)
        }
    })
}

export const destroyStudent = (req, res) => {
    destroy(req.params.id, (err, result) => {
        if(err) {
            res.send(err)
        }
        else {
            res.json(result)
        }
    })
}

export const login = (req, res) => {
    authenticate(req.body, (err, result) => {
        if(err) {
            res.send(err)
        }
        else {
            res.json(result)
        }
    })
}