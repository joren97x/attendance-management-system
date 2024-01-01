import express from 'express'
import { storeStudent, destroyStudent, updateStudent, showStudent, allStudent, updatePass } from '../controllers/StudentController.js'
import { storeAttendance, showAttendance, allAttendance, updateAttendance, destroyAttendance } from '../controllers/AttendanceController.js'


const router = express.Router()

router.post('/student', storeStudent)
router.delete('/student/:id', destroyStudent)
router.put('/student/:id', updateStudent)
router.get('/student/:id', showStudent)
router.get('/student', allStudent)
router.put('/student/change-password/:id', updatePass)

router.post('/attendance', storeAttendance)
router.get('/attendance/:id', showAttendance)
router.get('/attendance', allAttendance)
router.put('/attendance/:id', updateAttendance)
router.delete('/attendance/:id', destroyAttendance)

export default router